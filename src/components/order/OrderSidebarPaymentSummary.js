import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import OrderPriceInfoRow from "./OrderPriceInfoRow";

function OrderSidebarPaymentSummary({ orders }) {
  const subTotal = orders.reduce(
    (total, order) => total + order.price * order.qty,
    0
  );
  const taxFee = (subTotal * 10) / 100;
  const serviceFee = ((subTotal + taxFee) * 5) / 100;
  const grandTotal = subTotal + taxFee + serviceFee;

  return (
    <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 bg-white lg:flex lg:flex-col">
      <OrderPriceInfoRow info="Subtotal" amount={subTotal} />
      <OrderPriceInfoRow info="Tax" amount={taxFee} />
      <OrderPriceInfoRow info="Service" amount={serviceFee} />
      <div className="border-b-2 border-gray-200 my-2 px-3"></div>
      <OrderPriceInfoRow info="Total" amount={grandTotal} />

      <ButtonPrimary
        text="Order Now"
        mt={4}
        mb={2}
        me={2}
        disabled={orders.length > 0 ? false : true}
      />
    </div>
  );
}

export default OrderSidebarPaymentSummary;
