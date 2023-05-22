window.addEventListener('load', function() {
    var signupForm = document.getElementById('signupForm');
    var signupBtn = document.getElementById('signupBtn');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Perform form validation
      var username = document.getElementById('username').value;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
      } else {
        // Send the form data to the server
        // You can use AJAX or fetch to make an asynchronous request to the server
        // Here's an example using fetch:
  
        fetch('signup.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          })
        })
        .then(function(response) {
          // Handle the response from the server
          // For example, display a success message or show an error to the user
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    });
  });
  