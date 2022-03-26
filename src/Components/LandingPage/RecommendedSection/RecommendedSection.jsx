import RecommendedBanner from "./RecommendedBanner/RecommendedBanner";

const RecommendedSection = () => {
  return (
    <>
      <div className="landing-recommended-section">
        <RecommendedBanner
          subTitle="Recommended for you"
          title="Canon EOS 6D DSLR Camera (Kit 24 - 105) (Black)."
          description="Light weight, full-frame DSLR, fitted with a 20.2 megapixel CMOS
            sensor, 11-point AutoFocus system and built-in GPS and Wi-Fi
            support. Designed for professional still photographers."
          btnLabel="Shop Now"
          readMoreLabel="Read more"
        />
      </div>
    </>
  );
};

export default RecommendedSection;
