import React from "react";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";

function OrderPriceInfoRow({ info = "", amount = 0 }) {
  return (
    <div className="flex justify-between rounded text-gray-500 me-2">
      <span>{info}</span>
      <span>{convertAmountNumberToCurrencyString(amount)}</span>
    </div>
  );
}

export default OrderPriceInfoRow;
