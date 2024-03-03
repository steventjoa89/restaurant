import React from "react";
import ListRow from "../ListRow";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";
import useOrderStore from "../../store/client/useOrderStore";
import { Button } from "flowbite-react";

function PaymentSummary() {
  const { orders } = useOrderStore();

  const subTotal = orders.reduce(
    (total, order) => total + order.price * order.qty,
    0
  );
  const taxFee = (subTotal * 10) / 100;
  const serviceFee = ((subTotal + taxFee) * 5) / 100;
  const grandTotal = subTotal + taxFee + serviceFee;

  return (
    <>
      <ListRow
        text="Subtotal"
        value={convertAmountNumberToCurrencyString(subTotal)}
      />
      <ListRow text="Tax" value={convertAmountNumberToCurrencyString(taxFee)} />
      <ListRow
        text="Service"
        value={convertAmountNumberToCurrencyString(serviceFee)}
      />
      <hr className="my-2 border-gray-100" />
      <ListRow
        text="Total"
        textWeight="bold"
        value={convertAmountNumberToCurrencyString(grandTotal)}
      />

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
    </>
  );
}

export default PaymentSummary;
