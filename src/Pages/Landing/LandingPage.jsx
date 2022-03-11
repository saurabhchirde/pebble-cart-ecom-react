import HeaderSection from "../../Components/LandingPage/HeaderSection/HeaderSection";
import HotProductsSection from "../../Components/LandingPage/HotProductSection/HotProductsSection";
import RecommendedSection from "../../Components/LandingPage/RecommendedSection/RecommendedSection";
import FloatingButton from "../../Components/UI/Button/FloatingButton";
import "./LandingPage.css";

const LandingPage = () => {
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
