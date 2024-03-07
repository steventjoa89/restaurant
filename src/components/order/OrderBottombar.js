import React, { useState } from "react";
import useOrderStore from "../../store/client/useOrderStore";
import ButtonPrimary from "../ButtonPrimary";
import Modal from "../Modal";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";
import useOrderedStore from "../../store/client/useOrderedStore";
import OrderSidebarTab from "./OrderSidebarTab";
import { TAB_NAMES } from "../../data/info";
import OrderSidebarTabPanel from "./OrderSidebarTabPanel";

function OrderBottombar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();
  const { ordered } = useOrderedStore();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setActiveTab(0);
    setIsModalOpen(!isModalOpen);
  };

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
    <>
      {(orders?.length > 0 || ordered?.length > 0) && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 py-3 flex items-center justify-center bg-white border-t border-gray-300 shadow-xl">
          <ButtonPrimary
            additionalClassName="flex-grow ms-4 me-4"
            onClick={toggleModal}
          >
            My Order
          </ButtonPrimary>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={toggleModal} isMobileModal={true}>
        {/* Body */}
        <>
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
        </>
        {/* Footer */}
        <div className="flex flex-row justify-center w-full">
          <OrderSidebarPaymentSummary
            orders={orders}
            ordered={ordered}
            isModalView={true}
          />
        </div>
      </Modal>
    </>
  );
}

export default OrderBottombar;
