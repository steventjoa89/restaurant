import React, { useState } from "react";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";
import useOrderStore from "../../store/client/useOrderStore";
import OrderSidebarTab from "./OrderSidebarTab";
import OrderSidebarTabPanel from "./OrderSidebarTabPanel";
import useOrderedStore from "../../store/client/useOrderedStore";

function OrderSidebar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();
  const { ordered } = useOrderedStore();

  const [activeTab, setActiveTab] = useState(0);

  const onIncrementOrder = (menu) => {
    incrementOrder(menu);
  };
  const onDecrementOrder = (menu) => {
    decrementOrder(menu);
  };
  const onDeleteOrder = (menu) => {
    deleteOrder(menu);
  };

  // Change Tab Handler
  const tabNames = ["my-order", "ordered"];
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <aside
      className="fixed top-0 right-0 z-20 hidden lg:flex lg:flex-col w-80 h-full pt-16 font-normal duration-75 transition-width"
      aria-label="Sidebar"
    >
      {/* TAB */}
      <OrderSidebarTab
        tabNames={tabNames}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <OrderSidebarTabPanel
        tabNames={tabNames}
        activeTab={activeTab}
        orders={orders}
        onIncrementOrder={onIncrementOrder}
        onDecrementOrder={onDecrementOrder}
        onDeleteOrder={onDeleteOrder}
        ordered={ordered}
      />

      <div className="flex-none">
        <OrderSidebarPaymentSummary orders={orders} />
      </div>
    </aside>
  );
}

export default OrderSidebar;
