import React from "react";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";
import OrderButton from "../OrderButton";
import { FaThumbsUp } from "react-icons/fa";
import ButtonCounter from "../ButtonCounter";

function OrderMenuCard({ menu, orders, onIncrementOrder, onDecrementOrder }) {
  const { name, image, price, isRecommended } = menu;
  const isOrdered = orders.find((order) => order.id === menu.id);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg shadow-md mb-2 cursor-pointer object-cover w-full h-28 md:h-32 lg:h-48"
        // onClick={() => showMenuModalInfo(id)}
      />
      <div className="px-3 flex flex-col flex-grow md:text-left">
        <div className="flex justify-between">
          <h5 className="text-md font-bold tracking-tight text-gray-900 truncate">
            {name}
          </h5>
          {isRecommended && (
            <div>
              <FaThumbsUp className="text-sm text-yellow-400 tracking-tight mt-2" />
            </div>
          )}
        </div>

        <h6 className="mb-2 text-md tracking-tight text-gray-500 text-left truncate">
          {convertAmountNumberToCurrencyString(price)}
        </h6>
        <div className="mt-auto mb-2 self-center md:self-end">
          {isOrdered ? (
            <ButtonCounter
              qty={isOrdered?.qty}
              onIncrementOrder={() => onIncrementOrder(menu)}
              onDecrementOrder={() => onDecrementOrder(menu)}
            />
          ) : (
            <OrderButton onClick={() => onIncrementOrder(menu)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderMenuCard;
