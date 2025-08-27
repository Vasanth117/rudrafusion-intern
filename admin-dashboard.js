// Dummy Data for Testing
const applications = [
    {
        name: "John Doe",
        email: "john@example.com",
        university: "MIT",
        skills: ["JavaScript", "React", "CSS"],
        status: "pending",
        appliedOn: "2025-08-27"
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        university: "Stanford",
        skills: ["Python", "Django", "ML"],
        status: "approved",
        appliedOn: "2025-08-25"
    },
    {
        name: "Mike Johnson",
        email: "mike@example.com",
        university: "Harvard",
        skills: ["Java", "Spring", "SQL"],
        status: "rejected",
        appliedOn: "2025-08-20"
    },
    // Add more dummy applications as needed
];

// Global Variables
let currentPage = 1;
const itemsPerPage = 5;

// DOM Elements
const applicationsTableBody = document.getElementById("applicationsTableBody");
const pendingCount = document.getElementById("pendingCount");
const approvedCount = document.getElementById("approvedCount");
const rejectedCount = document.getElementById("rejectedCount");
const searchInput = document.getElementById("searchApplications");
const filterStatus = document.getElementById("filterStatus");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const currentPageDisplay = document.getElementById("currentPage");

const modal = document.getElementById("applicationModal");
const modalDetails = document.getElementById("applicationDetails");
const closeModalBtn = document.querySelector(".close-modal");

// Helper Functions
function renderCounts() {
    pendingCount.textContent = applications.filter(a => a.status === "pending").length;
    approvedCount.textContent = applications.filter(a => a.status === "approved").length;
    rejectedCount.textContent = applications.filter(a => a.status === "rejected").length;
}

function renderTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const filter = filterStatus.value;

    let filteredApps = applications.filter(app => {
        const matchesSearch =
            app.name.toLowerCase().includes(searchTerm) ||
            app.email.toLowerCase().includes(searchTerm) ||
            app.university.toLowerCase().includes(searchTerm);
        const matchesFilter = filter === "all" || app.status === filter;
        return matchesSearch && matchesFilter;
    });

    const totalPages = Math.ceil(filteredApps.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedApps = filteredApps.slice(start, end);

    applicationsTableBody.innerHTML = "";
    paginatedApps.forEach((app, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${app.name}</td>
            <td>${app.email}</td>
            <td>${app.university}</td>
            <td>${app.skills.join(", ")}</td>
            <td><span class="status-badge status-${app.status}">${app.status}</span></td>
            <td>${app.appliedOn}</td>
            <td>
                <div class="action-buttons">
                    <button class="view-button" data-index="${applications.indexOf(app)}"><i class="fas fa-eye"></i></button>
                </div>
            </td>
        `;
        applicationsTableBody.appendChild(tr);
    });

    currentPageDisplay.textContent = currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Event Listeners
searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderTable();
});

filterStatus.addEventListener("change", () => {
    currentPage = 1;
    renderTable();
});

prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

nextPageBtn.addEventListener("click", () => {
    currentPage++;
    renderTable();
});

// Modal Functionality
applicationsTableBody.addEventListener("click", (e) => {
    if (e.target.closest(".view-button")) {
        const index = e.target.closest(".view-button").dataset.index;
        const app = applications[index];
        showModal(app);
    }
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
});

function showModal(app) {
    modalDetails.innerHTML = `
        <div class="app-detail">
            <h3>${app.name}</h3>
            <div class="detail-grid">
                <div class="detail-label">Email:</div><div class="detail-value">${app.email}</div>
                <div class="detail-label">University:</div><div class="detail-value">${app.university}</div>
                <div class="detail-label">Skills:</div><div class="detail-value">${app.skills.join(", ")}</div>
                <div class="detail-label">Status:</div><div class="detail-value">${app.status}</div>
                <div class="detail-label">Applied On:</div><div class="detail-value">${app.appliedOn}</div>
            </div>
        </div>
    `;
    modal.classList.add("active");
}

// Logout Button
document.getElementById("logoutButton").addEventListener("click", () => {
    alert("Logged out successfully!");
    // You can redirect to login page if needed
    // window.location.href = "login.html";
});

// Initial Render
renderCounts();
renderTable();
