import React from "react";
import DesktopNavigationBar from "../src/Components/UI/Navigation/DesktopNavigationBar";
import LandingPage from "./Pages/Landing/LandingPage";
import { useModal } from "./Context/ModalContext";
import Login from "../src/Components/UI/Modal/Login";
import Signup from "../src/Components/UI/Modal/Signup";
import MobileNavigationBar from "../src/Components/UI/Navigation/MobileNavigationBar";
import MobileNavigationBarBottom from "../src/Components/UI/Navigation/MobileNavigationBarBottom";
import "./App.css";

const App = () => {
  const { showLoginModal, showSignupModal } = useModal();
  return (
    <>
      {showLoginModal && <Login />}
      {showSignupModal && <Signup />}
      <DesktopNavigationBar />
      <MobileNavigationBar />
      <MobileNavigationBarBottom />
      <LandingPage />
    </>
  );
};

export default App;
