const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  const username = form.querySelector('#username').value;
  const password = form.querySelector('#password').value;

  // Replace with your actual validation logic
  if (username.length === 0 || password.length === 0) {
    event.preventDefault();
    alert('Please fill in all fields.');
  }
});
