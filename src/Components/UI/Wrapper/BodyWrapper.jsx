import { useAuth, useModal } from "../../../Context";
import "./BodyWrapper.css";

const BodyWrapper = ({ children }) => {
  const { setShowProfileMenu } = useAuth();
  const { setShowNavMenu } = useModal();
  return (
    <div
      onClick={() => {
        setShowProfileMenu(false);
        setShowNavMenu(false);
      }}
      className="bodyWrapper"
    >
      {children}
    </div>
  );
};

export default BodyWrapper;
