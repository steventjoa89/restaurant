import React from "react";
import HeadingRow from "../HeadingRow";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";

function RightOrderPane() {
  return (
    <div className="hidden md:block md:col-span-2 overflow-y-scroll h-screen hide-scrollbar mr-2 border-l border-gray-200 pl-2">
      <HeadingRow text="Current Order" />
      <OrderSummary />

      <HeadingRow text="Payment Summary" />
      <PaymentSummary />
    </div>
  );
}

export default RightOrderPane;
