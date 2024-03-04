import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function OrderButton({ onClick }) {
  return <ButtonPrimary text="Order" px={3} py={2} me={0} onClick={onClick} />;
}

export default OrderButton;
