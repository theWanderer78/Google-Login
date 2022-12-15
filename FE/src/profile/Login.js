import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./login.css";
import UNB_LOGO from "../assets/img/unb-logo.jpg";

const Login = (props) => {
  console.log("props login--", props);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const clientId =
    "860221560880-3nf3qbpjkh44a4le9jikjk23dp1qif9c.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res) => {
    console.log(" Response --", res);

    console.log("onSuccess--", res.accessToken);
    const accessToken = res.accessToken;
    const profileObj = res?.profileObj;

    fetch("http://localhost:3000/auth/google", {
      method: "POST",
      // headers: {
      //   Authorization: `Bearer ${accessToken},`,
      //   "Access-Control-Allow-Origin": "*",
      //   "Content-Type": "application/json",
      // },
      headers: new Headers({
        Authorization: `Bearer ${accessToken},`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }).then((response) => {
      console.log("respinse---------------", response);
      if (response?.status === 200) {
        navigate("/profile", {
          state: {
            clientId: clientId,
            buttonText: "Log out",
            onLogoutSuccess: null,
            profileObj: profileObj,
          },
        });
      } else {
        alert(response?.statusText);
      }
    });
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        {/* <h3 className="title">Login Here</h3> */}
        <div className="logo-area">
          <img className="logo-img" src={UNB_LOGO} height="70px" />
        </div>
        <div className="google-button">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      </form>
    </>
  );
};
export default Login;
