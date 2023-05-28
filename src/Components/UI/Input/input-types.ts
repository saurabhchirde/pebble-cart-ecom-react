export interface InputTypeOneProps {
  inputWrapper?: string;
  label?: string;
  iconWrapper?: string;
  icon?: string;
  type?: string;
  name?: string;
  required: boolean;
  autoComplete?: string | undefined;
  placeholder: string;
  onChange?: () => void;
  value?: string;
}

export interface InputTypePasswordProps {
  inputWrapper?: string;
  label?: string;
  iconWrapper?: string;
  icon?: string;
  type?: string;
  name?: string;
  required: boolean;
  autoComplete?: string | undefined;
  placeholder?: string;
  onChange: () => void;
  onEyeClick: () => void;
  eyeIcon?: string;
  value?: string;
}

export interface InputTypeTwoProps {
  onClick?: () => void;
  inputWrapper?: string;
  label?: string;
  iconWrapper?: string;
  icon?: string;
  type?: string;
  name?: string;
  required?: boolean;
  autoComplete?: string | undefined;
  placeholder?: string;
  onChange?: () => void;
  checked?: boolean;
  value?: string;
}
