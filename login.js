// Redirect to index.html if user is already logged in
if (localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username !== "" && password !== "") {
                localStorage.setItem("loggedInUser", username); // Store session
                window.location.href = "index.html"; // Redirect to main page
            } else {
                alert("Please fill in both fields!");
            }
        });
    }

    // Handle register form submission (Optional)
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const regUsername = document.getElementById("registerUsername").value.trim();
            const regEmail = document.getElementById("registerEmail").value.trim();
            const regPassword = document.getElementById("registerPassword").value.trim();

            if (regUsername !== "" && regEmail !== "" && regPassword !== "") {
                localStorage.setItem("loggedInUser", regUsername); // Store session
                alert("Account created successfully! Redirecting...");
                window.location.href = "index.html"; // Redirect immediately
            } else {
                alert("Please fill in all fields!");
            }
        });
    }
});
