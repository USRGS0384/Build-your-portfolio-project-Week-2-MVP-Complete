const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit',   
 (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const   
 dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;   

    const verifyPassword = document.getElementById('verify-password').value;   

    const gender = document.getElementById('gender').value;
    const location = document.getElementById('location').value;

    // Basic validation (add more robust validation as needed)
    if (password !== verifyPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    // Submit form data (replace with your desired submission logic)
    console.log('Form data:', { username, dob, email, password, gender, location });
    errorMessage.textContent = ''; // Clear error message if validation passes
});