import "./AnimateLoader.css";
import { useEffect } from "react";
import camera_dark from "../../Data/Img/Animation/camera_dark.json";
import { useAnimation } from "../../Context";
import lottie from "lottie-web";

const AnimateLoader = () => {
  const { setLoader } = useAnimation();

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#camera-dark"),
      animationData: camera_dark,
    });
    const animateTime = setTimeout(() => {
      setLoader(false);
    }, 2500);
    return () => {
      clearTimeout(animateTime);
    };
  }, []);

  return (
    <div className="loader-animation">
      <div id="camera-dark" />
    </div>
  );
};

export default AnimateLoader;
