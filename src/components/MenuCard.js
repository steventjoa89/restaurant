import React from "react";
import CardTitle from "./CardTitle";
import CardAmountPrice from "./CardAmountPrice";
import Counter from "./Counter";
import CardDisountSubtitle from "./CardDisountSubtitle";

function MenuCard({
  name,
  price,
  image,
  isDiscountMenu = false,
  discount = 0,
  priceBeforeDiscount = 0,
}) {
  return (
    <div className="px-3 py-2 mb-2 border border-gray-200 shadow-sm rounded-lg">
      <div className="flex flex-col">
        <img
          src={image}
          alt={name}
          className="rounded-lg shadow-md mb-2 cursor-pointer"
        />
        <div className="flex flex-row">
          <CardTitle text={name} />
        </div>
        <div className="flex flex-row">
          {/* <CardSubtitle text="Price Per Portion" /> */}
          {isDiscountMenu && (
            <CardDisountSubtitle
              discount={discount}
              priceBeforeDiscount={priceBeforeDiscount}
            />
          )}
        </div>
        <div className="flex flex-row mt-1 mb-2">
          {/* <CardSubtitle text="Price Per Portion" /> */}
          <CardAmountPrice amount={price} />
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
