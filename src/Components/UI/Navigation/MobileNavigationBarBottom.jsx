import BadgeIconButton from "../Button/BadgeIconButton";
import IconButton from "../Button/IconButton";
import "./MobileNavigationBarBottom.css";

const MobileNavigationBarBottom = () => {
  return (
    <>
      <nav className="mobile-navigation-bar-bottom dark-nav-bar">
        <a>
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-md"
            icon="far fa-heart"
            badgeClassName="badge-on-icon"
            badgeValue="3"
            onClick={() => {}}
          />
        </a>
        <a href="./index.html">
          <IconButton btnClassName="btn icon-btn-md" icon="fas fa-house-user" />
        </a>
        <a href="./cart.html">
          <BadgeIconButton
            btnWrapper="badge-container"
            btnClassName="btn badge-icon-btn-md"
            icon="fas fa-shopping-cart"
            badgeClassName="badge-on-icon"
            badgeValue="1"
            onClick={() => {}}
          />
        </a>
      </nav>
    </>
  );
};

export default MobileNavigationBarBottom;
