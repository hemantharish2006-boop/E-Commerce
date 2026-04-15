document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorElement = document.getElementById('error');

    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        errorElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';

        // For demonstration purposes, log the user's details
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        alert('Sign up successful!');

        // Redirect to another page or clear the form
        // window.location.href = 'welcome.html';
        // Or
        document.getElementById('signupForm').reset();
    }
});
