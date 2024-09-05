document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate form data (e.g., check password match, required fields)

  if (password.value !== verifyPassword.value) {
      errorMessage.textContent = "Passwords do not match.";
      return;
  }

  // Submit form data to server (replace with your backend logic)

  // For demonstration purposes, display a success message
  errorMessage.textContent = "Sign up successful!";
});