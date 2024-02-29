import React from "react";
import { convertAmountNumberToString } from "../utils/stringUtils";

function CardDisountSubtitle({ amount = "", textSize = "[0.5rem]" }) {
  return (
    <>
      <div className={`font-bold text-${textSize} text-red-600 bg-red-200 rounded-sm px-1`}>15%</div>
      <div
        className={`ml-1 text-${textSize} font-bold tracking-tight text-gray-400 dark:text-white line-through`}
      >
        {convertAmountNumberToString(amount)}
      </div>
    </>
  );
}

export default CardDisountSubtitle;
