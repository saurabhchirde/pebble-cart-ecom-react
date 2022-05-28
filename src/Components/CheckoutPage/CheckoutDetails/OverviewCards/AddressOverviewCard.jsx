import { useAuth, useAxiosCalls, useCheckout, useTheme } from "Context";
import { SingleAddress, NewAddressModal } from "Components";
import "./AddressOverViewCard.css";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";

export const AddressOverviewCard = () => {
  const {
    auth: {
      token,
      user: { addresses },
    },
    showAddressModal,
    setShowAddressModal,
  } = useAuth();
  const { darkTheme } = useTheme();
  const { addAddressOnServer } = useAxiosCalls();
  const { selectedAddress, setSelectedAddress } = useCheckout();

  const addNewAddressHandler = () => {
    setShowAddressModal(true);
  };

  const addDemoAddressHandler = () => {
    const demoAddress = {
      _id: uuid(),
      fullName: "Guest User",
      address: "58, Sunderban Apartment, Sector 7, Airoli, Navi Mumbai",
      pinCode: 400708,
      mobile: 8989898989,
    };

    const addressConfig = {
      url: "/api/user/addresses",
      body: {
        address: { ...demoAddress },
      },
      headers: { headers: { authorization: token } },
    };

    addAddressOnServer(addressConfig);
  };

  const checkIconStatus =
    addresses.length > 0
      ? selectedAddress
        ? "fas fa-check-circle"
        : "far fa-check-circle"
      : "far fa-check-circle";

  useEffect(() => {
    if (addresses.length < 1) {
      setSelectedAddress(false);
    }
  }, [addresses.length]);

  return (
    <div
      className={
        darkTheme ? "contact-address" : "contact-address contact-address-light"
      }
    >
      <details>
        <summary>
          <h1>Contact & Delivery Address</h1>
          <i className={checkIconStatus}></i>
        </summary>
        {showAddressModal && (
          <NewAddressModal setShowAddressModal={setShowAddressModal} />
        )}
        <div className="address address-one">
          <div className="radio-input">
            {addresses.length > 0 ? (
              <div className="checkout-address-container">
                {addresses.map((address) => {
                  return (
                    <label key={address._id} htmlFor={address._id}>
                      <div className="checkout-address-section">
                        <input
                          type="radio"
                          name="radio"
                          id={address._id}
                          onChange={() => setSelectedAddress(true)}
                        />
                        <SingleAddress
                          props={address}
                          selectedAddressId={address._id}
                        />
                      </div>
                    </label>
                  );
                })}
              </div>
            ) : (
              <p className="p-lg mg-point6-lt">
                Please add address to continue
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={addNewAddressHandler}
            className="btn primary-text-btn-md new-address-button"
          >
            Add New Address
          </button>
          <button
            onClick={addDemoAddressHandler}
            className="btn primary-text-btn-md new-address-button"
          >
            Add Demo Address
          </button>
        </div>
      </details>
    </div>
  );
};
