document.getElementById('paymentForm').addEventListener('submit'), function(event) {
    event.preventDefault(); // Prevent form submission
  
    var cardNumber = document.getElementById('cardNumber').value;
    var cardHolder = document.getElementById('cardHolder').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    // Perform validation checks  
    if (cardNumber.trim() === '') {
      alert('Please enter a cardNumber');
      return;
    }
  
    if (cardHolder.trim() === '') {
      alert('Please enter cardHolder Name');
      return;
    }

    if ( expiryDate.trim() ===''){
      alert('Please enter expiryDate(MM/YY)');
    }
  
    if (cvv.trim() === '') {
      alert('Please enter cvv');
      return;
    }
  
    // Registration successful, redirect or perform other actions
    alert('Registration successful');
            return;}