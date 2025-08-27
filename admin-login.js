document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Selections
    const loginTab = document.querySelector('[data-tab="loginTab"]');
    const registerTab = document.querySelector('[data-tab="registerTab"]');
    const loginForm = document.getElementById('adminLoginForm');
    const registerForm = document.getElementById('adminRegisterForm');
    const loginError = document.getElementById('loginError');
    const registerError = document.getElementById('registerError');
    const passwordToggles = document.querySelectorAll('.toggle-password');
    
    // --- In-Memory 'Database' for Demo ---
    // In a real application, this would be an API call to a backend server.
    const mockAdmins = [
        { email: 'Vasanth@gmail.com', password: 'Vasanth@1119', name: 'Vasanth' }
    ];

    // --- Tab Switching Logic ---
    function switchTab(activeTab, activeForm) {
        // Deactivate all tabs and forms
        document.querySelectorAll('.tab-button').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

        // Activate the selected tab and form
        activeTab.classList.add('active');
        activeForm.classList.add('active');

        // Clear any previous error messages
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
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // --- Login Form Submission ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;

        // Mock authentication check
        const user = mockAdmins.find(admin => admin.email === email && admin.password === password);

        if (user) {
            // Successful login: Redirect to dashboard
            console.log('Login successful! Redirecting...');
            window.location.href = "admin-dashboard.html";
        } else {
            // Failed login: Show error
            loginError.textContent = "Invalid email or password.";
        }
    });

    // --- Registration Form Submission ---
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        // Basic validation
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

        // Mock registration check
        const userExists = mockAdmins.some(admin => admin.email === email);

        if (userExists) {
            registerError.textContent = "An account with this email already exists.";
        } else {
            // Mock account creation
            const newAdmin = { name, email, password };
            mockAdmins.push(newAdmin);
            console.log('Registration successful! New admin added:', newAdmin);

            // Redirect on success
            window.location.href = "admin-dashboard.html";
        }
    });
});