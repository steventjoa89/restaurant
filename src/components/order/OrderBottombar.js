import React, { useState } from "react";
import useOrderStore from "../../store/client/useOrderStore";
import ButtonPrimary from "../ButtonPrimary";
import Modal from "../Modal";
import OrderCard from "./OrderCard";
import OrderSidebarPaymentSummary from "./OrderSidebarPaymentSummary";

function OrderBottombar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
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

  return (
    <>
      {orders?.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 py-3 flex items-center justify-center bg-white border-t border-gray-300 shadow-xl">
          <ButtonPrimary
            text="My Order"
            additionalClassName="flex-grow ms-4 me-4"
            onClick={toggleModal}
          />
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        isMobileModal={true}
        title="My Orders"
      >
        {/* Body */}
        <div>
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
        {/* Footer */}
        <div className="flex flex-row justify-center w-full">
          <OrderSidebarPaymentSummary orders={orders} isModalView={true} />
        </div>
      </Modal>
    </>
  );
}

export default OrderBottombar;
