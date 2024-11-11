$(document).ready(function() {
    $('#emailForm').submit(function(event) {
      event.preventDefault(); 
  
      var email = $('input[name="email"]').val();
  
      $.ajax({
        url: 'http://localhost:3000/check-email',
        method: 'POST',
        data: { email: email },
        success: function(response) {
          $('#result').html(response);
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
      });
  
      return false; 
    });
  });