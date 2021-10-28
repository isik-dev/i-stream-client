import React from "react";
// when the component first renders to the screen we will load google auth library as follows:
// componentDidMount() { window.gapi.load('client:auth2') }

// loading a library will take some time, therefore we need to wait and when it loads we go the next step
// we do it using a callback function:
// componentDidMount() { window.gapi.client('client:auth2', () => {}) }

// inside that callback function we should pass clientId and scope, so that later we can initialize GoogleAuth object!

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE,
        scope: "email",
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
