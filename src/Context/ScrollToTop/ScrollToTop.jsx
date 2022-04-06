import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../Filter/FilterProvider";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const { filterState } = useFilter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, filterState.sort]);

  return <>{children}</>;
};

export { ScrollToTop };
