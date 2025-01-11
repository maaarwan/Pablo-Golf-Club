document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded successfully!");
});





// Simple form validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        event.preventDefault();
    }
});


// Validate Sign-Up Form
document.getElementById("signupForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault(); // Prevent form submission
    }
});