import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function OrderButton({ onClick }) {
  return (
    <ButtonPrimary px={3} py={2} me={0} onClick={onClick}>
      Order
    </ButtonPrimary>
  );
}

export default OrderButton;
