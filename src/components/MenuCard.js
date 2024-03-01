import React from "react";
import CardTitle from "./CardTitle";
import CardAmountPrice from "./CardAmountPrice";
import CounterButton from "./CounterButton";
import CardDisountSubtitle from "./CardDisountSubtitle";
import OrderButton from "./OrderButton";
import useOrderStore from "../store/client/useOrderStore";

function MenuCard(menu) {
  const { orders, increment, decrement } = useOrderStore();

  const {
    id,
    name,
    price,
    image,
    isDiscountMenu = false,
    discount = 0,
    priceBeforeDiscount = 0,
  } = menu;

  const order = orders.find((order) => order.id === id);

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
            {order ? (
              <CounterButton
                count={order.qty}
                onIncClick={() => increment(menu)}
                onDecClick={() => decrement(menu)}
              />
            ) : (
              <OrderButton onClick={() => increment(menu)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
