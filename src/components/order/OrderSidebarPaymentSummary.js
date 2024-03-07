import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import OrderPriceInfoRow from "./OrderPriceInfoRow";
import { useAddOrder } from "../../store/server/features/order/mutation";

function OrderSidebarPaymentSummary({ orders, isModalView = false }) {
  const addOrdersMutation = useAddOrder();

  const subTotal = orders.reduce(
    (total, order) => total + order.price * order.qty,
    0
  );
  const taxFee = (subTotal * 10) / 100;
  const serviceFee = ((subTotal + taxFee) * 5) / 100;
  const grandTotal = subTotal + taxFee + serviceFee;

  // Submit New Order
  const onSubmitOrder = async () => {
    if (orders && orders.length > 0) {
      try {
        await addOrdersMutation.mutateAsync(orders);
        console.log("Orders submitted successfully");
        // Handle success, e.g., show a success message
      } catch (error) {
        console.error("Failed to submit orders:", error);
        // Handle error, e.g., show an error message
        // TODO: Error handling => TOAST
        // ON SUCCESS, DELETE TOMBOL DELETENYA..., jadiin status
      }
    }
  };

  return (  // {/* TODO: button order nownya juga muncul di tab 2 + harganya.... => di sesuaikan */}
    <div
      className={`justify-center w-full ${
        isModalView ? "p-1" : "p-4"
      } bg-white lg:flex lg:flex-col`}
    >
      <OrderPriceInfoRow info="Subtotal" amount={subTotal} />
      <OrderPriceInfoRow info="Tax" amount={taxFee} />
      <OrderPriceInfoRow info="Service" amount={serviceFee} />
      <div className="border-b-2 border-gray-200 my-2 px-3"></div>
      <OrderPriceInfoRow info="Total" amount={grandTotal} />

      <ButtonPrimary
        mt={4}
        mb={2}
        me={0}
        disabled={orders.length > 0 ? false : true}
        onClick={onSubmitOrder}
      >
        Order Now
      </ButtonPrimary>
    </div>
  );
}

export default OrderSidebarPaymentSummary;
