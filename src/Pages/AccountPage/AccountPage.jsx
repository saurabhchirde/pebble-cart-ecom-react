import {
  AccountDetails,
  AccountNavBar,
  AccountNavBarMobile,
} from "../../Components/UserAccountPage";
import { useAlert, useModal } from "../../Context";
import Alert from "../../Components/Alert/Alert";
import "./AccountPage.css";

const AccountPage = () => {
  const { addressDeletedAlert } = useAlert();
  const { showNavMenu } = useModal();

  return (
    <>
      {addressDeletedAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Address Deleted"
          dispatchType="hideAddressDeletedAlert"
        />
      )}
      <div className="account-page-main">
        {showNavMenu && <AccountNavBarMobile />}
        <AccountNavBar />
        <AccountDetails />
      </div>
    </>
  );
};

export default AccountPage;
