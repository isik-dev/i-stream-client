import React from "react";
// when the component first renders to the screen we will load google auth library as follows:
// componentDidMount() { window.gapi.load('client:auth2') }

// loading a library will take some time, therefore we need to wait and when it loads we go the next step
// we do it using a callback function:
// componentDidMount() { window.gapi.load('client:auth2', () => {}) }

// inside that callback function we should pass clientId and scope, so that later we can initialize GoogleAuth object!

// window.gapi.client.init({}) is going to return us a promise. Thus, we should proceed with .then(() => {})

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
        });
    });
  }

  checkIfSignedIn = () => {
    if (this.state.signInStatus === null) {
      return <div>I dont know if it is signed in</div>;
    } else if (this.state.signInStatus) {
      return <div>It is signed in</div>;
    } else {
      return <div>It is not signed in</div>;
    }
  };

  render() {
    return <div>{this.checkIfSignedIn()}</div>;
  }
}

export default GoogleAuth;
