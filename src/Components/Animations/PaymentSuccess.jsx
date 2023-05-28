import "./Animation.css";
import { useEffect } from "react";
import paymentSuccess from "Data/Img/Animation/success-payment.json";
import lottie from "lottie-web";

export const PaymentSuccess = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#payment-success"),
      animationData: paymentSuccess,
      loop: false,
    });
  }, []);

  return (
    <div className="payment-success-animation">
      <div id="payment-success" />
    </div>
  );
};
