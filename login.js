document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');

    // For demonstration purposes, let's set a static username and password.
    var validUsername = 'user';
    var validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        // Login successful
        alert('Login successful!');
        errorElement.style.display = 'none';
        // Redirect to another page or do whatever you want upon successful login
        window.location.href = 'dashboard.html';
    } else {
        // Login failed
        errorElement.style.display = 'block';
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to forgot password page.');
    // Here you can redirect to a real "Forgot Password" page
    // window.location.href = 'forgot-password.html';
});
