import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import OrderPriceInfoRow from "./OrderPriceInfoRow";
import { useAddOrder } from "../../store/server/features/order/mutation";
import { toast } from "react-toastify";
import useOrderedStore from "../../store/client/useOrderedStore";
import useOrderStore from "../../store/client/useOrderStore";

function OrderSidebarPaymentSummary({
  orders,
  ordered,
  handleTabClick,
  isModalView = false,
}) {
  const addOrdersMutation = useAddOrder(); // Place new order
  const { addOrdered } = useOrderedStore();
  const { clearOrders } = useOrderStore();

  const subTotal = (orders ?? [])
    .concat(ordered ?? [])
    .reduce((total, order) => total + order.price * order.qty, 0);

  const taxFee = (subTotal * 10) / 100;
  const serviceFee = ((subTotal + taxFee) * 5) / 100;
  const grandTotal = subTotal + taxFee + serviceFee;

  // Submit New Order
  const onSubmitOrder = async () => {
    if (orders && orders.length > 0) {
      try {
        const response = await addOrdersMutation.mutateAsync(orders);
        // Append response to ordered
        addOrdered(response);
        // Remove everything from orders
        clearOrders();
        // Display toast message
        toast.success("Orders placed.");
        // Set Tab into Ordered List
        handleTabClick(1);
      } catch (error) {
        toast.error("Failed to submit orders.");
        console.error("Failed to submit orders:", error);
      }
    }
  };

  return (
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
        label={orders.length > 0 ? orders.length : undefined}
      >
        Place Order
      </ButtonPrimary>
    </div>
  );
}

export default OrderSidebarPaymentSummary;
