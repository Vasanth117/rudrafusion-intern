document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loginTab = document.querySelector('[data-tab="loginTab"]');
    const registerTab = document.querySelector('[data-tab="registerTab"]');
    const loginForm = document.getElementById('adminLoginForm');
    const registerForm = document.getElementById('adminRegisterForm');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');
    const passwordToggles = document.querySelectorAll('.toggle-password');

    // --- LocalStorage Helpers ---
    function getAdmins() {
        return JSON.parse(localStorage.getItem('admins')) || [];
    }

    function saveAdmins(admins) {
        localStorage.setItem('admins', JSON.stringify(admins));
    }

    // Initialize default admin if not already saved
    if (!localStorage.getItem('admins')) {
        saveAdmins([{ email: 'Vasanth@gmail.com', password: 'Vasanth@1119', name: 'Vasanth' }]);
    }

    // --- Tab Switching Logic ---
    function switchTab(activeTab, activeForm) {
        document.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

        activeTab.classList.add('active');
        activeForm.classList.add('active');

        loginError.textContent = '';
        registerError.textContent = '';
    }

    loginTab.addEventListener('click', () => switchTab(loginTab, loginForm));
    registerTab.addEventListener('click', () => switchTab(registerTab, registerForm));

    // --- Password Visibility Toggle ---
    passwordToggles.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.closest('.form-group').querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // --- Login Form Submission ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('adminEmail').value.trim();
        const password = document.getElementById('adminPassword').value.trim();

        const admins = getAdmins();
        const user = admins.find(admin => admin.email === email && admin.password === password);

        if (user) {
            console.log('Login successful! Redirecting...');
            localStorage.setItem('currentAdmin', JSON.stringify(user));
            window.location.href = "admin-dashboard.html";
        } else {
            loginError.textContent = "Invalid email or password.";
        }
    });

    // --- Registration Form Submission ---
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const confirmPassword = document.getElementById('registerConfirmPassword').value.trim();

        if (!name || !email || !password || !confirmPassword) {
            registerError.textContent = "All fields are required.";
            return;
        }

        if (password.length < 6) {
            registerError.textContent = "Password must be at least 6 characters long.";
            return;
        }

        if (password !== confirmPassword) {
            registerError.textContent = "Passwords do not match.";
            return;
        }

        let admins = getAdmins();
        const userExists = admins.some(admin => admin.email === email);

        if (userExists) {
            registerError.textContent = "An account with this email already exists.";
        } else {
            const newAdmin = { name, email, password };
            admins.push(newAdmin);
            saveAdmins(admins);

            console.log('Registration successful! New admin:', newAdmin);

            // Auto switch to login tab after registration
            switchTab(loginTab, loginForm);
            alert("Registration successful! Please login.");
        }
    });
});
