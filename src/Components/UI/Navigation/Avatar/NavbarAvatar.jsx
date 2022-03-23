const NavbarAvatar = (props) => {
  return (
    <>
      <div className={props.avatarWrapper}>
        <div className={props.avatarClassName}>
          {props.src}
          <img
            loading="lazy"
            src={props.src}
            alt="avatar"
            className={props.imgDisplay}
          />
        </div>
        <span className={props.statusBadge}></span>
      </div>
    </>
  );
};

export default NavbarAvatar;
