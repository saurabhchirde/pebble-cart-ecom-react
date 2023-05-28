export interface FloatingButtonProps {
  href: string;
  icon: string;
}

export interface BadgeIconButtonProps {
  btnWrapper: string;
  btnClassName: string;
  icon: string;
  badgeClassName: string;
  badgeValue?: number;
  onClick: () => void;
  label: string;
}

export interface ButtonProps {
  label: string;
  btnClassName?: string;
  onClick?: () => void;
  type?: any;
  btnWrapper?: string;
}

export interface ButtonSimpleProps {
  label: string;
  btnClassName: string;
  onClick?: () => void;
}

export interface IconButtonProps {
  icon: string;
  btnClassName: string;
  onClick: () => void;
}
