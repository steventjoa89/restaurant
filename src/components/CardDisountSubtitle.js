import React from "react";
import { convertAmountNumberToCurrencyString } from "../utils/stringUtils";

function CardDisountSubtitle({ discount = 0, priceBeforeDiscount = 0 }) {
  return (
    <>
      {discount > 0 && (
        <div className="font-bold text-xs text-red-600 bg-red-200 rounded-sm px-1">
          {discount}%
        </div>
      )}
      {priceBeforeDiscount > 0 && (
        <div className="ml-1 text-xs font-bold tracking-tight text-gray-400 dark:text-white line-through">
          {convertAmountNumberToCurrencyString(priceBeforeDiscount)}
        </div>
      )}
    </>
  );
}

export default CardDisountSubtitle;
