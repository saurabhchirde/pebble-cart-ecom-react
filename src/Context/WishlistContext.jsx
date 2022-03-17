import { createContext, useContext, useEffect, useState } from "react";

const wishlistContext = createContext([]);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(
    JSON.parse(sessionStorage.getItem("wishlist")) ?? []
  );

  useEffect(() => {
    sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <wishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </wishlistContext.Provider>
  );
};

const useWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useWishlist };
