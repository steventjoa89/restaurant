import React from "react";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";
import OrderCard from "./OrderCard";
import useOrderStore from "../../store/client/useOrderStore";

function OrderSidebar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();

  const onIncrementOrder = (menu) => {
    incrementOrder(menu);
  };
  const onDecrementOrder = (menu) => {
    decrementOrder(menu);
  };
  const onDeleteOrder = (menu) => {
    deleteOrder(menu);
  };

  return (
    <aside
      className="fixed top-0 right-0 z-20 hidden lg:flex lg:flex-col w-80 h-full pt-16 font-normal duration-75 transition-width"
      aria-label="Sidebar"
    >
      <div className="overflow-auto flex-grow px-3 ">
        {orders.map((order, i) => (
          <OrderCard
            key={i}
            {...order}
            onIncOrder={() => onIncrementOrder(order)}
            onDecOrder={() => onDecrementOrder(order)}
            onDelOrder={() => onDeleteOrder(order)}
          />
        ))}
      </div>

      <div className="flex-none">
        <OrderSidebarPaymentSummary orders={orders} />
      </div>
    </aside>
  );
}

export default OrderSidebar;
