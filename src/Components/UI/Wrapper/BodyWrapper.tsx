import { useAuth, useModal } from "Context";
import "./BodyWrapper.css";

interface BodyWrapperProps {
  children: React.ReactNode;
}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({ children }) => {
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
