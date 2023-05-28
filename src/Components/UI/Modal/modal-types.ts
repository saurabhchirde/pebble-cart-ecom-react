import React, { Dispatch, SetStateAction } from "react";

export interface LoginInputFormProps {
  onLoginSubmitHandler: () => void;
  debounce: () => void;
  loginInput: { email: string; password: string };
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export interface PaymentConfirmModalProps {
  orderId: string;
  paymentId: string;
}
