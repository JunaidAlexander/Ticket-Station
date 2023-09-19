class Login {
  constructor() {
    // Initialize Firebase UI and start the authentication process.
    this.ui = new firebaseui.auth.AuthUI(auth);
    this.setupAuthentication();
  }

  // Set up the authentication options and callbacks.
  setupAuthentication() {
    this.ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onSignInSuccess.bind(this),
      },
    });
  }

  // Callback function for successful authentication.
  onSignInSuccess(authResult, redirectUrl) {
    // Access the user information.
    const user = authResult.user;

    // Redirect to "index.html" after successful authentication.
    this.redirectToIndexPage();
  }

  // Redirect to "index.html".
  redirectToIndexPage() {
    window.location.href = "events.html";
  }
}

const app = new Login();
