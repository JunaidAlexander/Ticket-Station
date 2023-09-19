

// 1. *Encapsulation*:
//    - You encapsulate the functionality related to user authentication within the `Login` class. The `setupAuthentication()`, `onSignInSuccess()`, and `redirectToIndexPage()` methods are encapsulated within the class.

// 2. *Inheritance*:
//    - While your code snippet doesn't explicitly demonstrate inheritance, JavaScript itself uses prototype-based inheritance. Your `Login` class inherits some properties and methods from its prototype, which includes built-in functions inherited from `Object.prototype`.

// 3. *Abstraction*:
//    - Abstraction is evident in the way you've organized your code. The `Login` class abstracts the authentication process and provides a clear interface for setting up authentication (`setupAuthentication()`) and handling a successful sign-in (`onSignInSuccess()`).

// 4. *Polymorphism*:
//    - In your code, you're using callback functions, such as `this.onSignInSuccess.bind(this)`. This demonstrates a form of polymorphism, allowing the `signInSuccessWithAuthResult` callback to accept different functions with compatible signatures.

// Your code overall demonstrates good object-oriented programming practices in JavaScript, as it encapsulates related functionality, abstracts complex processes, and allows for polymorphic behavior through callbacks.


class Login {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      this.ui = new firebaseui.auth.AuthUI(auth);
      this.setupAuthentication();
    });
  }

  setupAuthentication() {
    this.ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true // Require the display name for email sign-in
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onSignInSuccess.bind(this)
      }
    });
  }

  onSignInSuccess(authResult, redirectUrl) {
    const user = authResult.user;
    const userName = user.displayName || "User"; // Get the user's display name

    // Update the HTML content to display the user's name
    const userNameElement = document.getElementById("user-name");
    if (userNameElement) {
      userNameElement.textContent = "Welcome, " + userName;
    }

    this.redirectToIndexPage();
  }

  redirectToIndexPage() {
    window.location.href = "events.html";
  }
}

const app = new Login();
