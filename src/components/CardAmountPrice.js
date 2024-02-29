import React from "react";
import { convertAmountNumberToString } from "../utils/stringUtils";

function CardAmountPrice({ amount = 0, textSize = "sm" }) {
  return (
    <div
      className={`text-${textSize} font-bold tracking-tight text-gray-900 dark:text-white`}
    >
      {convertAmountNumberToString(amount)}
    </div>
  );
}

export default CardAmountPrice;