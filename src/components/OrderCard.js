import React from "react";
import IncDecButton from "./IncDecButton";
import CardTitle from "./CardTitle";

function OrderCard() {
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
            <CardTitle text="Japanese Chicken Gyoza" />
          </div>
          <div className="flex flex-row">
            <div className="text-xs font-bold tracking-tight text-green-500 dark:text-white">
              Rp. 10.000,00
            </div>
          </div>
          <div className="mt-auto">
            {/* ListRow */}
            <div className="flex flex-row justify-between px-1 py-0.5">
              <div className="flex">
                <IncDecButton isInc={false} />
                <span className="inline-flex items-center justify-center w-8 h-5 font-bold text-xs">
                  0
                </span>
                <IncDecButton />
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
