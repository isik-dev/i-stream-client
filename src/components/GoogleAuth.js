import React from "react";
// when the component first renders to the screen we will load google auth library as follows:
// componentDidMount() { window.gapi.load('client:auth2') }

// loading a library will take some time, therefore we need to wait and when it loads we go the next step
// we do it using a callback function:
// componentDidMount() { window.gapi.load('client:auth2', () => {}) }

// inside that callback function we should pass clientId and scope, so that later we can initialize GoogleAuth object!

// window.gapi.client.init({}) is going to return us a promise. Thus, we should proceed with .then(() => {})
// inside .then() we have a a callback function -> one being a one time setting of our state & two a listener wth its own callback that will change our state

// the first setState will be invoked as soon as the window.gapi library is loaded.
// the second setState will be invoked when we signIn or signOut

class GoogleAuth extends React.Component {
  state = { signInStatus: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ signInStatus: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ signInStatus: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.signInStatus === null) {
      return null;
    } else if (this.state.signInStatus) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui green google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
