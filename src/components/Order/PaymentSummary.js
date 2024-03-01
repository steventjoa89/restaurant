import React from "react";
import ListRow from "../ListRow";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";

function PaymentSummary({ data, orders }) {
  const subTotal = orders.reduce(
    (total, order) =>
      total + order.qty * data.menu.find((mn) => mn.id === order.id).price,
    0
  );
  const taxFee = (subTotal * 10) / 100;
  const serviceFee = ((subTotal + taxFee) * 5) / 100;
  const grandTotal = subTotal + taxFee + serviceFee;

  return (
    <>
      <ListRow text="Subtotal" value={convertAmountNumberToCurrencyString(subTotal)} />
      <ListRow text="Tax" value={convertAmountNumberToCurrencyString(taxFee)} />
      <ListRow text="Service" value={convertAmountNumberToCurrencyString(serviceFee)} />
      <hr className="my-2 border-gray-100" />
      <ListRow
        text="Total"
        textWeight="bold"
        value={convertAmountNumberToCurrencyString(grandTotal)}
      />
    </>
  );
}

export default PaymentSummary;
