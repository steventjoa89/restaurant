import React from "react";
import { convertAmountNumberToCurrencyString } from "../utils/stringUtils";

function CardAmountPrice({ amount = 0, textSize = "sm" }) {
  return (
    <div
      className={`text-${textSize} font-bold tracking-tight text-gray-900 dark:text-white`}
    >
      {convertAmountNumberToCurrencyString(amount)}
    </div>
  );
}

export default CardAmountPrice;
