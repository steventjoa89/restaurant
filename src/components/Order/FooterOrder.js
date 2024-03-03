import { Button, Footer, Modal } from "flowbite-react";
import React, { useState } from "react";
import HeadingRow from "../HeadingRow";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import useOrderStore from "../../store/client/useOrderStore";

function FooterOrder() {
  const { orders } = useOrderStore();

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Footer
        container
        className="md:hidden fixed bottom-0 left-0 z-50 w-full p-4 flex items-center justify-center border-t border-gray-300 shadow-xl"
      >
        <Button className="flex-grow" color="dark" pill onClick={handleClick}>
          <span>My Order</span>
          {orders.length > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 ms-2 text-xs font-semibold text-black bg-white rounded-full p-2">
              {orders.length}
            </span>
          )}
        </Button>
      </Footer>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="m-0 py-1 items-center">
          <HeadingRow text="" />
        </Modal.Header>
        <Modal.Body>
          <OrderSummary />
          <HeadingRow text="Payment Summary" />
          <PaymentSummary />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FooterOrder;
