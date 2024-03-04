import React from "react";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";
import OrderCard from "./OrderCard";
import useOrderStore from "../../store/client/useOrderStore";

function OrderSidebar() {
  const { orders } = useOrderStore();

  return (
    <aside
      id="sidebar"
      className="fixed top-0 right-0 z-20 hidden flex-col flex-shrink-0 w-80 h-full pt-16 font-normal duration-75 lg:flex transition-width"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-l border-gray-200">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
            <OrderCard
              id={1}
              name="Pepperoni Pizza"
              image="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
              price={1200000}
              description="Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with paprika and chili peppers."
              categories={["Main Courses", "Pizza"]}
            />

            {/* Total Price & Payment Summary */}
            <OrderSidebarPaymentSummary orders={orders} />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default OrderSidebar;
