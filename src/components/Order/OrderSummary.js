import React from "react";
import OrderCard from "./OrderCard";

function OrderSummary() {
  return (
    <div className="overflow-y-scroll h-screen hide-scrollbar" style={{ maxHeight: '55vh' }}>
      {[...Array(10)].map((x, i) => (
        <OrderCard />
      ))}
    </div>
  );
}

export default OrderSummary;
