document.getElementById('registrationForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Perform validation checks
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Registration successful, redirect or perform other actions
    alert('Registration successful');
            return;}