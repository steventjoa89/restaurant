import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";
import ButtonCounter from "../ButtonCounter";

function OrderCard({
  id,
  name,
  price,
  image,
  qty,
  onIncOrder,
  onDecOrder,
  onDelOrder,
  readonly = false,
}) {
  return (
    <div className="flex items-center p-3 mb-3.5 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-primary-100">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="mr-4 text-left">
        <p className="text-sm font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">
          {convertAmountNumberToCurrencyString(price)}
        </p>
        <div
          className={`${!readonly ? "flex items-center ml-auto" : "hidden"}`}
        >
          <ButtonCounter
            qty={qty}
            onIncrementOrder={onIncOrder}
            onDecrementOrder={onDecOrder}
          />
        </div>
      </div>
      <div className={`${!readonly ? "flex items-center ml-auto" : "hidden"}`}>
        <button
          type="button"
          className="p-2 rounded text-red-600 hover:bg-gray-100"
          onClick={onDelOrder}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
