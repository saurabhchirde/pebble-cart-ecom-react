import HeaderSection from "../../Components/LandingPage/HeaderSection/HeaderSection";
import HotProductsSection from "../../Components/LandingPage/HotProductSection/HotProductsSection";
import RecommendedSection from "../../Components/LandingPage/RecommendedSection/RecommendedSection";
import FloatingButton from "../../Components/UI/Button/FloatingButton";
import { useEffect } from "react";
import { useTheme } from "../../Context";

const LandingPage = () => {
  const { darkTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem("pebbleCartTheme", JSON.stringify(darkTheme));
    darkTheme
      ? document.body.classList.remove("lightTheme")
      : document.body.classList.add("lightTheme");
  }, [darkTheme]);

  return (
    <>
      <HeaderSection />
      <HotProductsSection />
      <RecommendedSection />
      <FloatingButton href="#" icon="fas fa-arrow-up" />
    </>
  );
};

export default LandingPage;
