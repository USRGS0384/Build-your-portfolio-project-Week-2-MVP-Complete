const form = document.querySelector('form');
const errorMessages = document.createElement('div');
errorMessages.classList.add('error-messages');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate password matching
  if (password.value !== verifyPassword.value) {
    errorMessages.textContent = 'Passwords do not match.';
    form.appendChild(errorMessages);
    return;
  }

  // Submit the form
  // Replace this with your actual form submission logic
  console.log('Form submitted successfully!');
});