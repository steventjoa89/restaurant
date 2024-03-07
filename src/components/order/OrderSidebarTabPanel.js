import React from "react";
import OrderCard from "./OrderCard";

function OrderSidebarTabPanel({
  activeTab,
  orders,
  onIncrementOrder,
  onDecrementOrder,
  onDeleteOrder,
  ordered,
}) {
  return (
    <>
      {/* My Orders */}
      <div
        className={`${
          activeTab === 0 ? "block" : "hidden"
        } overflow-auto flex-grow px-3 ${
          orders?.length === 0 && "flex justify-center items-center"
        }`}
      >
        {orders?.length === 0 ? (
          <p className="italic text-sm text-gray-400 mt-3">
            You have not selected any items.
          </p>
        ) : (
          orders.map((order, i) => (
            <OrderCard
              key={i}
              {...order}
              onIncOrder={() => onIncrementOrder(order)}
              onDecOrder={() => onDecrementOrder(order)}
              onDelOrder={() => onDeleteOrder(order)}
            />
          ))
        )}
      </div>
      <div
        className={`${
          activeTab === 1 ? "block" : "hidden"
        } overflow-auto flex-grow px-3 ${
          ordered?.length === 0 && "flex justify-center items-center"
        }`}
      >
        {ordered?.length === 0 ? (
          <p className="italic text-sm text-gray-400 mt-3">
            You have not ordered any menu.
          </p>
        ) : (
          ordered.map((order, i) => (
            <OrderCard key={i} {...order} readonly={true} />
          ))
        )}
      </div>
    </>
  );
}

export default OrderSidebarTabPanel;
