import { useAuth, useTheme } from "../../../../Context";
import "./Addresses.css";
import NewAddress from "./NewAddress/NewAddress";
import SingleAddress from "./SingleAddress/SingleAddress";

const Addresses = () => {
  const {
    auth: {
      user: { addresses },
    },
  } = useAuth();
  const { darkTheme } = useTheme();

  return (
    <div className={darkTheme ? "all-address-dark" : "all-address-light"}>
      <div className="address-title">
        <h2>My Account</h2>
        <h2>Addresses</h2>
      </div>
      <NewAddress />
      {addresses.map((address) => {
        return <SingleAddress key={address._id} props={address} />;
      })}
    </div>
  );
};

export default Addresses;
