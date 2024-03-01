import React from "react";
import HeadingRow from "../HeadingRow";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";
import { Button } from "flowbite-react";
import useOrderStore from "../../store/client/useOrderStore";

function RightOrderPane() {
  const { orders } = useOrderStore();
  return (
    <div className="hidden md:block md:col-span-2 overflow-y-scroll h-screen hide-scrollbar mr-2 border-l border-gray-200 pl-2">
      <HeadingRow text="Current Order" />
      <OrderSummary />

      <HeadingRow text="Payment Summary" />
      <PaymentSummary />

      <div className="flex mt-3">
        <Button
          className="flex-grow"
          color="dark"
          pill
          disabled={orders.length > 0 ? false : true}
        >
          Order Now
        </Button>
      </div>
    </div>
  );
}

export default RightOrderPane;
