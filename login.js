
if (localStorage.getItem("loggedInUser")) {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username !== "" && password !== "") {
                localStorage.setItem("loggedInUser", username);
                window.location.href = "index.html";
            } else {
                alert("Please fill in both fields!");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const regUsername = document.getElementById("registerUsername").value.trim();
            const regEmail = document.getElementById("registerEmail").value.trim();
            const regPassword = document.getElementById("registerPassword").value.trim();

            if (regUsername !== "" && regEmail !== "" && regPassword !== "") {
                localStorage.setItem("loggedInUser", regUsername);
                alert("Account created successfully! Redirecting...");
                window.location.href = "index.html";
            } else {
                alert("Please fill in all fields!");
            }
        });
    }
});
