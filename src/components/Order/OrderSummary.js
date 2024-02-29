import React from "react";
import HeadingRow from "../HeadingRow";
import PaymentSummary from "./PaymentSummary";

function OrderSummary() {
  return (
    <div className="hidden md:block md:col-span-2 overflow-y-scroll h-screen hide-scrollbar">
      <HeadingRow text="Current Order" />

      <HeadingRow text="Payment Summary" />
      <PaymentSummary />
    </div>
  );
}

export default OrderSummary;
