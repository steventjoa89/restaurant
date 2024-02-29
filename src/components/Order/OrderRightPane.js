import React from "react";
import HeadingRow from "../HeadingRow";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";

function OrderRightPane() {
  return (
    <div className="hidden md:block md:col-span-2 overflow-y-scroll h-screen hide-scrollbar mr-2">
      <HeadingRow text="Current Order" />
      <OrderSummary />

      <HeadingRow text="Payment Summary" />
      <PaymentSummary />
    </div>
  );
}

export default OrderRightPane;
