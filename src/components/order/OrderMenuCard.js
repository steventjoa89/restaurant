import React from "react";
import { convertAmountNumberToCurrencyString } from "../../utils/stringUtils";
import OrderButton from "../OrderButton";
import { FaThumbsUp } from "react-icons/fa";

function OrderMenuCard({ id, name, image, price, isRecommended }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img
        src={image}
        alt={name}
        className="rounded-t-lg shadow-md mb-2 cursor-pointer object-cover w-full h-48"
        // onClick={() => showMenuModalInfo(id)}
      />
      <div className="px-3 flex flex-col flex-grow md:text-left">
        <div className="flex justify-between">
          <h5 className="text-md font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
          {isRecommended && (
            <div>
              <FaThumbsUp className="text-sm text-yellow-400 tracking-tight mt-2" />
            </div>
          )}
        </div>

        <h6 className="mb-2 text-md tracking-tight text-gray-500">
          {convertAmountNumberToCurrencyString(price)}
        </h6>
        <div className="mb-2 md:self-end">
          <OrderButton />
        </div>
      </div>
    </div>
  );
}

export default OrderMenuCard;
