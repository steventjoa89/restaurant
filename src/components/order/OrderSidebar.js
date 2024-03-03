import React from "react";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";

function OrderSidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed top-0 right-0 z-20 hidden flex-col flex-shrink-0 w-80 h-full pt-16 font-normal duration-75 lg:flex transition-width"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-l border-gray-200">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
            <div>123</div>

            {/* Total Price & Payment Summary */}
            <OrderSidebarPaymentSummary />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default OrderSidebar;
