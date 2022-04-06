import {
  AccountDetails,
  AccountNavBar,
  AccountNavBarMobile,
} from "../../Components/UserAccountPage";
import { useModal } from "../../Context";
import "./AccountPage.css";

const AccountPage = () => {
  const { showNavMenu } = useModal();

  return (
    <div className="account-page-main">
      {showNavMenu && <AccountNavBarMobile />}
      <AccountNavBar />
      <AccountDetails />
    </div>
  );
};

export default AccountPage;
