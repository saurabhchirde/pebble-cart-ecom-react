import "./SearchBar.css";

const SearchBar = (props) => {
  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onIconClick();
  };

  return (
    <>
      <form onSubmit={onSearchSubmit} className={props.searchWrapper}>
        <i className={props.micIcon}></i>
        <input type="search" name="search" placeholder={props.placeholder} />
        <i className={props.searchIcon}></i>
      </form>
    </>
  );
};
export default SearchBar;
