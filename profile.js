document.getElementById('profileForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission
  
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
  
    // Perform validation checks
    if (fullName.trim() === '') {
      alert('Please enter your fullName');
      return;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }
  
    // Registration successful, redirect or perform other actions
    alert('User Profile ');
            return;}