document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstNameInput = document.querySelector(
      'input[placeholder="First Name"]'
    );
    const lastNameInput = document.querySelector(
      'input[placeholder="Last Name"]'
    );
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const phoneInput = document.querySelector('input[placeholder="Phone"]');
    const messageTextarea = document.querySelector(
      'textarea[placeholder="Message"]'
    );

    // Validate the form inputs
    if (
      !firstNameInput.value.trim() ||
      !lastNameInput.value.trim() ||
      !emailInput.value.trim() ||
      !phoneInput.value.trim() ||
      !messageTextarea.value.trim()
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    // If all inputs are filled, you can submit the form here
    // form.submit();
    alert("Form submitted successfully!");
  });
});
