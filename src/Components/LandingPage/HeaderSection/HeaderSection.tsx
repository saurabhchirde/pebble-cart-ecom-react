import { HeaderBanner, SquareCards } from "Components";
import {
  cameraIcon,
  lensIcon,
  tripodIcon,
  accessoriesIcon,
  sonyAlphaCamera,
  polaroidCamera,
  actionCamera,
} from "Data/Img/Products/ProductImages";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "Context";

export const HeaderSection = () => {
  const [currImg, setCurrImg] = useState(0);
  const banner = [sonyAlphaCamera, polaroidCamera, actionCamera];
  const { darkTheme } = useTheme();

  useEffect(() => {
    const imgTime = setInterval(() => {
      if (currImg < 2) {
        setCurrImg((preNum) => preNum + 1);
      } else {
        setCurrImg(0);
      }
    }, 2500);
    return () => {
      clearInterval(imgTime);
    };
  }, [currImg, setCurrImg]);

  return (
    <>
      <div
        className={
          darkTheme ? "hero-section" : "hero-section hero-section-light"
        }
      >
        <HeaderBanner
          title="Your Perfect Camera."
          description="When you are ready for more, there is a camera waiting for you that is easy to carry but shoots like a pro"
          imgSrc={banner[currImg]}
          btnLabel="Shop Now"
        />
        <div
          className={
            darkTheme
              ? "hero-categories flex-row-center pd-2-tb"
              : "hero-categories flex-row-center pd-2-tb hero-categories-light"
          }
        >
          <Link to="/products/camera">
            <SquareCards title="Cameras" imgSrc={cameraIcon} />
          </Link>
          <Link to="/products/lenses">
            <SquareCards title="Lenses" imgSrc={lensIcon} />
          </Link>
          <Link to="/products/tripods">
            <SquareCards title="Tripods" imgSrc={tripodIcon} />
          </Link>
          <Link to="/products/accessories">
            <SquareCards title="Accessories" imgSrc={accessoriesIcon} />
          </Link>
        </div>
      </div>
    </>
  );
};
