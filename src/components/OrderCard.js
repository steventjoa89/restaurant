import React from "react";
import CardTitle from "./CardTitle";
import CounterButton from "./CounterButton";
import { convertAmountNumberToCurrencyString } from "../utils/stringUtils";
import { FaTrashAlt } from "react-icons/fa";
import CardDisountSubtitle from "./CardDisountSubtitle";

function OrderCard({
  qty,
  name,
  price,
  image,
  discount,
  onIncClick,
  onDecClick,
  onDelClick,
}) {
  return (
    <div className="px-3 py-2 mb-2 border border-gray-200 shadow-md rounded-lg">
      <div className="flex">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-lg shadow-md object-cover"
        />
        <div className="flex-1 flex flex-col pl-3">
          <div className="flex flex-row">
            <CardTitle text={name} />
          </div>
          <div className="flex flex-row">
            <div className="text-xs font-bold tracking-tight text-green-500 dark:text-white mr-1">
              {convertAmountNumberToCurrencyString(price)}
            </div>
            <CardDisountSubtitle discount={discount} priceBeforeDiscount={0} />
          </div>
          <div className="mt-auto">
            <div className="flex flex-row justify-between px-1 py-0.5">
              <div className="flex">
                <CounterButton
                  count={qty}
                  onIncClick={onIncClick}
                  onDecClick={onDecClick}
                />
              </div>
              <FaTrashAlt
                className="text-red-600 h-7 cursor-pointer"
                onClick={onDelClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
