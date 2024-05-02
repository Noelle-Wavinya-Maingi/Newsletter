
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const successModal = document.getElementById("success-modal");
  const signupContainer = document.getElementById("signup-container");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateEmail(emailInput.value)) {
      alert("Please enter a valid email address!");
      return;
    }

    // Simulate form submission delay (4 seconds)
    setTimeout(() => {
      // Hide sign-up page
      signupContainer.classList.add("hidden");
      // Show success modal
      successModal.style.display = "block";
    }, 1000); 
  });

  document.getElementById("dismiss-btn").addEventListener("click", () => {
    // Show sign-up page
    signupContainer.classList.remove("hidden");
    // Hide success modal
    successModal.style.display = "none";
  });

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
});
