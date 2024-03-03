import { Modal } from "flowbite-react";
import React from "react";
import OrderButton from "./OrderButton";
import useOrderStore from "../store/client/useOrderStore";
import CounterButton from "./CounterButton";

function MenuModal({ openModal, setOpenModal, menu }) {
  const { orders, incrementOrder, decrementOrder } = useOrderStore();
  const order = orders.find((order) => order.id === menu.id);
  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header className="m-0 py-1 items-center">
        <div className="text-md mt-3 font-bold tracking-tight text-gray-900 dark:text-white">
          {menu?.name}
        </div>
      </Modal.Header>
      <Modal.Body>
        <img
          src={menu?.image}
          alt={menu?.name}
          className="rounded-lg shadow-md mb-2 cursor-pointer w-full"
        />
        <div className="flex justify-end mt-5">
          {order ? (
            <CounterButton
              count={order?.qty}
              onIncClick={() => incrementOrder(menu)}
              onDecClick={() => decrementOrder(menu)}
            />
          ) : (
            <OrderButton onClick={() => incrementOrder(menu)} />
          )}
        </div>

        <div className="text-sm mt-3 tracking-tight justify-normal text-gray-900 dark:text-white">
          {menu?.description ?? ""}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MenuModal;
