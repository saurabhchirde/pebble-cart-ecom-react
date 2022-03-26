import { createContext, useContext, useState } from "react";
import {
  useSessionStorageGet,
  useSessionStorageSet,
} from "../../Hooks/useSessionStorage";

const wishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    useSessionStorageGet("wishlist") ?? []
  );

  useSessionStorageSet("wishlist", wishlist);

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
