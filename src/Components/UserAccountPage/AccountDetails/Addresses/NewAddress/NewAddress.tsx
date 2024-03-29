import { useAuth, useTheme } from "Context";
import "./NewAddress.css";
import "../SingleAddress/SingleAddress.css";
import { NewAddressModal } from "Components";

export const NewAddress = () => {
  const { darkTheme } = useTheme();
  const { showAddressModal, setShowAddressModal } = useAuth();

  const newAddressHandler = () => {
    setShowAddressModal(true);
  };

  return (
    <>
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
