import { createContext, useContext, useState } from "react";

const wishlistContext = createContext(null);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
