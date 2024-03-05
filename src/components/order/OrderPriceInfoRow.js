import React from "react";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";

function OrderPriceInfoRow({ info = "", amount = 0 }) {
  return (
    <div className="flex justify-between rounded text-gray-500 me-2">
      <span className="truncate">{info}</span>
      <span className="truncate">{convertAmountNumberToCurrencyString(amount)}</span>
    </div>
  );
}

export default OrderPriceInfoRow;
