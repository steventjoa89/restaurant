import React, { useState } from "react";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";
import useOrderStore from "../../store/client/useOrderStore";
import OrderSidebarTab from "./OrderSidebarTab";
import OrderSidebarTabPanel from "./OrderSidebarTabPanel";
import useOrderedStore from "../../store/client/useOrderedStore";
import { TAB_NAMES } from "../../data/info";

function OrderSidebar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();
  const { ordered } = useOrderedStore();

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
  const [activeTab, setActiveTab] = useState(0);

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
        tabNames={TAB_NAMES}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <OrderSidebarTabPanel
        tabNames={TAB_NAMES}
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
