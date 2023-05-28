interface NavbarAvatarProps {
  avatarWrapper: string;
  onClick: () => void;
  avatarClassName: string;
  src: string;
  imgDisplay: string;
  statusBadge: string;
}

export const NavbarAvatar: React.FC<NavbarAvatarProps> = (props) => {
  return (
    <>
      <div className={props.avatarWrapper} onClick={props.onClick}>
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
