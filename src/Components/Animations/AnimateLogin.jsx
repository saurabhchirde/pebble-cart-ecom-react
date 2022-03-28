import "./AnimateLoader.css";
import { useEffect } from "react";
import login1 from "../../Data/Img/Animation/login_1.json";
import { useAnimation } from "../../Context";
import lottie from "lottie-web";

const AnimateLogin = () => {
  const { setLoginAnimate } = useAnimation();

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#login_Animate"),
      animationData: login1,
    });
    const animateTime = setTimeout(() => {
      setLoginAnimate(false);
    }, 2500);
    return () => {
      clearTimeout(animateTime);
    };
  }, []);

  return (
    <div className="loader-animation">
      <div id="login_Animate" />
    </div>
  );
};

export default AnimateLogin;
