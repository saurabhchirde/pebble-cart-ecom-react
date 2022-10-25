export interface InputTypeOneProps {
  inputWrapper: string;
  label: string;
  iconWrapper: string;
  icon: string;
  type: string;
  name: string;
  required: boolean;
  autoComplete: string;
  placeholder: string;
  onChange: () => void;
}

export interface InputTypePasswordProps {
  inputWrapper: string;
  label: string;
  iconWrapper: string;
  icon: string;
  type: string;
  name: string;
  required: boolean;
  autoComplete: string;
  placeholder: string;
  onChange: () => void;
  onEyeClick: () => void;
  eyeIcon: string;
}

export interface InputTypeTwoProps {
  onClick: () => void;
  inputWrapper: string;
  label: string;
  iconWrapper: string;
  icon: string;
  type: string;
  name: string;
  required: boolean;
  autoComplete: string;
  placeholder: string;
  onChange: () => void;
  checked: boolean;
}
