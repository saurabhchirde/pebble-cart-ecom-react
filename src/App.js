import React from "react";
import DesktopNavigationBar from "../src/Components/UI/Navigation/DesktopNavigationBar";
import LandingPage from "./Pages/Landing/LandingPage";
import { useModal } from "./Context/ModalContext";
import Login from "../src/Components/UI/Modal/Login";
import Signup from "../src/Components/UI/Modal/Signup";
import MobileNavigationBar from "../src/Components/UI/Navigation/MobileNavigationBar";
import MobileNavigationBarBottom from "../src/Components/UI/Navigation/MobileNavigationBarBottom";
import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import BodyWrapper from "./Components/UI/Wrapper/BodyWrapper";

const App = () => {
  const { showLoginModal, showSignupModal } = useModal();
  return (
    <>
      {showLoginModal === true ? <Login /> : false}
      {showSignupModal === true ? <Signup /> : false}
      <DesktopNavigationBar />
      <MobileNavigationBar />
      <MobileNavigationBarBottom />
      <BodyWrapper>
        <LandingPage />
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default App;
