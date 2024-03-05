import React from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function ButtonCounter({ qty, onIncrementOrder, onDecrementOrder }) {
  return (
    <div className="flex flex-row py-1">
      <FaMinusCircle
        className="text-yellow-400 cursor-pointer text-2xl hover:text-yellow-500 focus:text-yellow-500"
        onClick={onDecrementOrder}
      />
      <div className="ms-2 me-2 text-md font-bold tracking-tight text-gray-600">
        {qty}
      </div>
      <FaPlusCircle
        className="text-yellow-400 cursor-pointer text-2xl hover:text-yellow-500 focus:text-yellow-500"
        onClick={onIncrementOrder}
      />
    </div>
  );
}

export default ButtonCounter;
