document.getElementById('loginForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform validation checks
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password');
      return;
    }
    alert('Successful Login');
            return;}