const signupForm = document.getElementById('signup-form');
const dashboard = document.getElementById('dashboard');
const homepage = document.getElementById('homepage');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password   
 = document.getElementById('password').value;
  const verifyPassword = document.getElementById('verify-password').value;   

  const dateOfBirth = document.getElementById('date-of-birth').value;
  const telephoneNumber = document.getElementById('telephone-number').value;
  const gender = document.getElementById('gender').value;
  const location = document.getElementById('location').value;

  if (!username || !email || !password || !verifyPassword || !dateOfBirth || !telephoneNumber || !gender || !location) {
    errorMessage.textContent = 'Please fill in all required fields.';
    return;
  }

  if (password !== verifyPassword) {
    errorMessage.textContent = 'Passwords do not match.';
    return;
  }

  // Store user data (e.g., in local storage or a database)

  // Hide sign-up form and show dashboard
  signupForm.style.display = 'none';
  dashboard.style.display = 'block';

  // Set username in dashboard
  dashboard.querySelector('p').textContent = `Welcome, ${username}!`;
});

document.getElementById('logout-button').addEventListener('click', () => {
  // Clear user data and show homepage
  // ...

  dashboard.style.display = 'none';
  homepage.style.display = 'block';
});