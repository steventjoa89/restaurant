import React from "react";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import { Button } from "flowbite-react";
import Counter from "./Counter";

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
          <CardSubtitle text="Price Per Portion" />
        </div>
        <div className="mt-auto">
          <div className="flex flex-row justify-between">
            <CardTitle text="Rp 60.000,00" />
            <div className="flex-3">
            {/* <Button color="dark" pill size="xs">
              Order
            </Button> */}
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
