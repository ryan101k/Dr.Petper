document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const id = document.getElementById("id").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear previous error messages
    document.getElementById("idError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";

    // Simple validation
    let isValid = true;
    if (!id) {
        document.getElementById("idError").style.display = "block";
        isValid = false;
    }

    if (!password) {
        document.getElementById("passwordError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        // Proceed with login logic (e.g., send data to the server)
        // Here you can implement AJAX or redirect to a new page after validation
        alert("로그인 성공!");
        // Example redirect after successful login
        // window.location.href = "/index/main.html";
    }
});
