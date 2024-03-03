import { Button, Footer, Modal } from "flowbite-react";
import React, { useState } from "react";
import HeadingRow from "../HeadingRow";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

function FooterOrder() {
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
