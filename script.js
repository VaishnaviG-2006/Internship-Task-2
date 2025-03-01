function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

function handleSignup(event) {
    event.preventDefault();
    alert('Signup Successful! Redirecting to login...');
    showLogin();
    return false;
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login Successful! Redirecting...');
    return false;
}
