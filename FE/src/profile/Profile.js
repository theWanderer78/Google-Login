import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "reactstrap";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./profile.scss";

const Profile = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const clientId =
    "860221560880-3nf3qbpjkh44a4le9jikjk23dp1qif9c.apps.googleusercontent.com";
  const loggedInUser = localStorage.getItem("authenticated");
  console.log("props--", props);
  console.log("location--", location);
  const profileObj = location?.state?.profileObj;
  console.log("profileObj--", profileObj);

  useEffect(() => {
    if (profileObj === null || profileObj === undefined) {
      navigate("/login");
    }
  }, []);

  function handldeLogout() {
    console.log("yooo");
    navigate("/login");
  }
  return (
    <>
      <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img
              src={
                (profileObj && profileObj.imageUrl) ||
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
              }
              alt="profile card"
            />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">
              {(profileObj && profileObj.name) || "John Doe"}
            </div>
            <div className="profile-card__txt">
              {(profileObj && profileObj.email) || "john@mail.com"}
            </div>
            <div className="profile-card-loc">
              <span className="profile-card-loc__icon">
                <svg className="icon">
                  <use href="#icon-location"></use>
                </svg>
              </span>

              <span className="profile-card-loc__txt">
                New Brunswik, Canada
              </span>
            </div>
            <div className="profile-card-ctr" onClick={handldeLogout}>
              <GoogleLogout
                clientId={location?.state?.clientId}
                buttonText={location?.state?.buttonText}
                onLogoutSuccess={location?.state?.onLogoutSuccess}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
