// Web form's submission and validation.

class FormHandler {
  constructor(formSelector) {
    // We create an object from this class, and pass a form selector as an argument.
    // This selector helps the object find and work with a specific form on a webpage.

    this.form = document.querySelector(formSelector);

    if (this.form) {
      // We check if the form was found in the webpage's HTML.
      // If it's found, we proceed with initializing the form handler.
      this.initialize();
    } else {
      // If the form couldn't be found, we show an error message in the console.
      console.error(`Form with selector '${formSelector}' not found.`);
    }
  }

  initialize() {
    // In the initialize method, we set up an event listener.
    // This listener "listens" for a form submission event.
    this.form.addEventListener("submit", (e) => {
      // When the form is submitted (like when you click a "Submit" button),
      // this event listener triggers.
      // The next line prevents the form from doing its usual submission action,
      // which is to send data to a server and refresh the page.
      // Instead, we want to do something else first.
      e.preventDefault();
      // After stopping the form from submitting, we call the handleSubmit method.
      // This method contains the logic for checking if all fields in the form are filled.

      this.handleSubmit();
    });
  }

  handleSubmit() {
    // The handleSubmit method does the actual form validation.
    // It checks if all required fields (like name, email, etc.) are filled out.
    // If any of them are empty, it displays an alert asking the user to fill them in.
    // If all fields are filled out, it displays a success message (in this case, an alert).

    const firstNameInput = this.form.querySelector(
      'input[placeholder="First Name"]'
    );
    const lastNameInput = this.form.querySelector(
      'input[placeholder="Last Name"]'
    );
    const emailInput = this.form.querySelector('input[placeholder="Email"]');
    const phoneInput = this.form.querySelector('input[placeholder="Phone"]');
    const messageTextarea = this.form.querySelector(
      'textarea[placeholder="Message"]'
    );

    if (
      !firstNameInput.value.trim() ||
      !lastNameInput.value.trim() ||
      !emailInput.value.trim() ||
      !phoneInput.value.trim() ||
      !messageTextarea.value.trim()
    ) {
      this.showAlert("Please fill out all required fields.");
    } else {
      // If all inputs are filled, you can submit the form here
      // this.form.submit();
      this.showAlert("Form submitted successfully!");
    }
  }

  showAlert(message) {
    // The showAlert method displays a pop-up message on the screen with the given message.
    alert(message);
  }
}

const formHandler = new FormHandler("form");
// Here, we create an instance (an object) of the FormHandler class
// and specify which form on the webpage it should work with.
