// Get the form element
var form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get the input values
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  
  // Display an alert with the input values
  alert('Name: ' + nameInput.value + '\nEmail: ' + emailInput.value);
  
  // Reset the form
  form.reset();
});