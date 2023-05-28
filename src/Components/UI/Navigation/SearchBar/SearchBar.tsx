import "./SearchBar.css";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit} className={props.searchWrapper}>
        <i className={props.micIcon}></i>
        <input
          type="search"
          name="search"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        <i className={props.searchIcon}></i>
      </form>
    </>
  );
};
