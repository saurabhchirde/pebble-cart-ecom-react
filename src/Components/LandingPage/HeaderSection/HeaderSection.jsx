import HeaderBanner from "./HeaderBanner/HeaderBanner";
import SquareCards from "./SquareCards/SquareCards";
import {
  cameraIcon,
  lensIcon,
  tripodIcon,
  accessoriesIcon,
  sonyAlphaCamera,
} from "../../../Data/Img/Products/ProductImages";

const HeaderSection = () => {
  return (
    <>
      <div className="hero-section">
        <HeaderBanner
          title="Simply the better Camera you are looking for."
          description="When you are ready for more, there is a camera waiting for you that
            is easy to carry but shoots like a pro"
          imgSrc={sonyAlphaCamera}
          btnLabel="Shop Now"
        />
        <div className="hero-categories flex-row-center pd-2-tb">
          <SquareCards title="Cameras" imgSrc={cameraIcon} />
          <SquareCards title="Lenses" imgSrc={lensIcon} />
          <SquareCards title="Tripods" imgSrc={tripodIcon} />
          <SquareCards title="Accessories" imgSrc={accessoriesIcon} />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
