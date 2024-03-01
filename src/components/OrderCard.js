import React from "react";
import IncButton from "./IncButton";
import CardTitle from "./CardTitle";
import CounterButton from "./CounterButton";
import { convertAmountNumberToCurrencyString } from "../utils/stringUtils";

function OrderCard({ qty, onIncClick, onDecClick, name, price }) {
  return (
    <div className="px-3 py-2 mb-2 border border-gray-200 shadow-md rounded-lg">
      <div className="flex">
        <img
          src="/images/peperoni.jfif"
          alt="peperoni"
          className="w-20 h-20 rounded-lg shadow-md object-cover"
        />
        <div className="flex-1 flex flex-col pl-3">
          <div className="flex flex-row">
            <CardTitle text={name} />
          </div>
          <div className="flex flex-row">
            <div className="text-xs font-bold tracking-tight text-green-500 dark:text-white">
              {convertAmountNumberToCurrencyString(price)}
            </div>
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
              <span>x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
