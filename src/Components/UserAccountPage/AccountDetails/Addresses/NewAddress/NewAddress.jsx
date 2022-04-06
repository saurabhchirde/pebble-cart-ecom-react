import { useAuth, useTheme } from "../../../../../Context";
import "./NewAddress.css";
import "../SingleAddress/SingleAddress.css";
import NewAddressModal from "./NewAddressModal/NewAddressModal";
import EditAddressModal from "./EditAddressModal/EditAddressModal";

const NewAddress = () => {
  const { darkTheme } = useTheme();
  const { showAddressModal, setShowAddressModal, showEditAddressModal } =
    useAuth();

  const newAddressHandler = () => {
    setShowAddressModal(true);
  };

  return (
    <>
      {showEditAddressModal && <EditAddressModal />}
      {showAddressModal && <NewAddressModal />}
      <div
        className={darkTheme ? "address-dark" : "address-light"}
        onClick={newAddressHandler}
      >
        <div className="new-address">
          <i className="fas fa-plus-circle"></i>
          <h2>Add New Address</h2>
        </div>
      </div>
    </>
  );
};

export default NewAddress;
