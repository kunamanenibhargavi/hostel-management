document.getElementById("home-link").addEventListener("click", function() {
    showContent("Home");
});

document.getElementById("student-link").addEventListener("click", function() {
    showContent("Student Management");
});

document.getElementById("room-link").addEventListener("click", function() {
    showContent("Room Management");
});

document.getElementById("payment-link").addEventListener("click", function() {
    showContent("Payment Management");
});

function showContent(content) {
    let mainSection = document.getElementById("main-section");
    switch (content) {
        case "Home":
            mainSection.innerHTML = `
                <h2>Welcome to Hostel Management System!</h2>
                <p>This system helps you manage students, rooms, and payments in a hostel.</p>
            `;
            break;
        case "Student Management":
            mainSection.innerHTML = `
                <h2>Student Management</h2>
                <p>Add your student management content here...</p>
            `;
            break;
        case "Room Management":
            mainSection.innerHTML = `
                <h2>Room Management</h2>
                <p>Add your room management content here...</p>
            `;
            break;
        case "Payment Management":
            mainSection.innerHTML = `
                <h2>Payment Management</h2>
                <p>Add your payment management content here...</p>
            `;
            break;
        default:
            mainSection.innerHTML = `
                <h2>Error: Content not found</h2>
            `;
            break;
    }
}