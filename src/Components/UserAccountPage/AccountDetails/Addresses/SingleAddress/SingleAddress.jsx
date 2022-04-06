import {
  useAlert,
  useAuth,
  useAxiosCalls,
  useTheme,
} from "../../../../../Context";
import "./SingleAddress.css";

const SingleAddress = ({ props }) => {
  const { fullName, address, pinCode, mobile } = props;
  const { auth } = useAuth();
  const { removeAddressFromServer, updateAddressOnServer } = useAxiosCalls();
  const { darkTheme } = useTheme();

  const addressConfig = {
    url: "/api/user/addresses",
    headers: { headers: { authorization: auth.token } },
    address: props,
  };

  const editAddressHandler = () => {
    updateAddressOnServer(addressConfig);
  };

  const deleteAddressHandler = () => {
    removeAddressFromServer(addressConfig);
  };

  return (
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
  );
};

export default SingleAddress;
