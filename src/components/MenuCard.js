import React from "react";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import { Button } from "flowbite-react";
import Counter from "./Counter";
import CardDisountSubtitle from "./CardDisountSubtitle";

function MenuCard() {
  return (
    <div className="px-3 py-2 mb-2 border border-gray-200 shadow-sm rounded-lg">
      <div className="flex flex-col">
        <img
          src="/images/peperoni.jfif"
          alt="peperoni"
          className="rounded-lg shadow-md mb-2 cursor-pointer"
        />
        <div className="flex flex-row">
          <CardTitle text="Japanese Chicken Gyoza" />
        </div>
        <div className="flex flex-row">
          {/* <CardSubtitle text="Price Per Portion" /> */}
          <CardDisountSubtitle discount={15} amount={100000} />
        </div>
        <div className="flex flex-row">
          {/* <CardSubtitle text="Price Per Portion" /> */}
          <CardTitle text="Rp 60.000,00" />
        </div>
        <div className="mt-auto flex justify-end">
          <div className="flex items-end">
            {/* <Button color="dark" pill size="xs">
              Order
            </Button> */}
            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
