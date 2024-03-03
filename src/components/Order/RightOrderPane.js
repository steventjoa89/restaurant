import React from "react";
import HeadingRow from "../HeadingRow";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";

function RightOrderPane() {
  return (
    <div className="hidden md:flex md:flex-col md:col-span-2 overflow-y-scroll h-screen hide-scrollbar mr-2 border-l border-gray-200 pl-2">
      <div className="">
        <HeadingRow text="Current Order" />
        <OrderSummary />
      </div>
      <div className="mt-auto">
        <HeadingRow text="Payment Summary" />
        <PaymentSummary />
      </div>
    </div>
  );
}

export default RightOrderPane;
