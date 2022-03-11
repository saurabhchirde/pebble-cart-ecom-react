const IconButton = (props) => {
  return (
    <>
      <button className={props.btnClassName}>
        <i className={props.icon}></i>
      </button>
    </>
  );
};

export default IconButton;
