import React from "react";
// import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import Profile from "./components/Profile/Profile";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

class App extends React.Component {
  state = {
    isLoggedIn: false,
    userProfile: null,
  };

  login = (userData) => {
    this.setState({
      isLoggedIn: true,
      userProfile: userData.user,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
      userProfile: null,
    });
  };

  render() {
    return (
      <>
        {/* {this.state.isLoggedIn ? (
          <Profile user={this.state.userProfile} logout={this.logout} />
        ) : (
          <GoogleLogin login={this.login} />
        )} */}
        <GoogleOAuthProvider clientId="860221560880-3nf3qbpjkh44a4le9jikjk23dp1qif9c.apps.googleusercontent.com">
          Hiii
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
        </GoogleOAuthProvider>
        ;
      </>
    );
  }
}

export default App;
