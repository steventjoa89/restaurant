import React from "react";
import useOrderStore from "../../store/client/useOrderStore";
import ButtonPrimary from "../ButtonPrimary";

function OrderBottombar() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } =
    useOrderStore();

  return (
    <>
      {orders?.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 py-3 flex items-center justify-center bg-white border-t border-gray-300 shadow-xl">
          <ButtonPrimary
            text="My Order"
            additionalClassName="flex-grow ms-4 me-4"
          />
        </div>
      )}
    </>
  );
}

export default OrderBottombar;
