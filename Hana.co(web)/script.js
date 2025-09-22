document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('PW').value;
    const confirmPassword = document.getElementById('CpW').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate successful signup
    alert('Signup successful!');
    this.reset();
});