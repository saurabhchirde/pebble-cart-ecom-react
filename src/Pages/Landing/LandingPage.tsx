import {
  HeaderSection,
  HotProductsSection,
  RecommendedSection,
  FloatingButton,
} from "Components";
import { useEffect } from "react";
import { useTheme } from "Context";

export const LandingPage = () => {
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
