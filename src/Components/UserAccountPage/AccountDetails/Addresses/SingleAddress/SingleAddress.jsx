import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useTheme,
} from "../../../../../Context";
import Alert from "../../../../Alert/Alert";
import "./SingleAddress.css";

const SingleAddress = ({ props }) => {
  const { fullName, address, pinCode, mobile } = props;
  const { auth, setNewAddress, setShowEditAddressModal } = useAuth();
  const { removeAddressFromServer } = useAxiosCalls();
  const { darkTheme } = useTheme();
  const {
    alertState: { addAddressAlert, addressDeletedAlert },
  } = useAlert();

  const addressConfig = {
    url: "/api/user/addresses",
    headers: { headers: { authorization: auth.token } },
    address: props,
  };

  const editAddressHandler = () => {
    setNewAddress(props);
    setShowEditAddressModal(true);
  };

  const deleteAddressHandler = () => {
    removeAddressFromServer(addressConfig);
  };

  return (
    <>
      {addAddressAlert && (
        <Alert
          alert="alert-success"
          icon="fas fa-check-circle alert-icon"
          text="Address Added"
          dispatchType="hideAddAddressAlert"
        />
      )}
      {addressDeletedAlert && (
        <Alert
          alert="alert-info"
          icon="fas fa-info alert-icon"
          text="Address Deleted"
          dispatchType="hideAddressDeletedAlert"
        />
      )}
      <div className={darkTheme ? "address-dark" : "address-light"}>
        <div className="address-text">
          <h2 className="title-lg-wt-5">{fullName}</h2>
          <p className="p-lg mg-1-top mg-point6-bot">{address}</p>
          <h3 className="title-md mg-point6-bot">Pin Code - {pinCode}</h3>
          <h3 className="title-md">Mobile - {mobile}</h3>
        </div>
        <div className="address-cta">
          <div className="address-cta-edit">
            <button
              onClick={editAddressHandler}
              className="btn primary-text-btn-md"
            >
              Edit
            </button>
            <button
              onClick={deleteAddressHandler}
              className="btn secondary-text-btn-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAddress;
