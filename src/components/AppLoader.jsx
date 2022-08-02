import React from "react";
import Loading from "react-loading";
import settings from "../helpers/settings";
import logo from "./../assets/images/logo.png";
export default function AppLoader() {
  return (
    <div className="app-loader">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="loader">
        <Loading type="spin" color={settings.colors.primary} />
      </div>
    </div>
  );
}
