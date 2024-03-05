import React from "react";
import Modal from "./Modal";
import OrderButton from "./OrderButton";
import ButtonCounter from "./ButtonCounter";
import { convertAmountNumberToCurrencyString } from "../utils/stringUtils";

function ModalMenuInfo({
  isModalOpen,
  toggleModal,
  modalMenuInfo,
  orders,
  onIncrementOrder,
  onDecrementOrder,
}) {
  const order = orders.find((order) => order.id === modalMenuInfo?.id);
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={toggleModal}
      title={modalMenuInfo?.name || ""}
    >
      {/* Body */}
      <div>
        <img
          src={modalMenuInfo?.image || ""}
          alt={modalMenuInfo?.name || ""}
          className="rounded-lg shadow-md mb-2 cursor-pointer w-full max-h-96 object-cover"
        />
        <div className="flex justify-center md:justify-end mt-4 mb-1">
          {order ? (
            <ButtonCounter
              qty={order?.qty}
              onIncrementOrder={() => onIncrementOrder(modalMenuInfo)}
              onDecrementOrder={() => onDecrementOrder(modalMenuInfo)}
            />
          ) : (
            <OrderButton onClick={() => onIncrementOrder(modalMenuInfo)} />
          )}
        </div>
        <h6 className="my-2 mt-1 text-md tracking-tight font-bold text-left truncate">
          {convertAmountNumberToCurrencyString(modalMenuInfo?.price || 0)}
        </h6>
        <p className="text-sm tracking-tight text-left text-gray-500">
          {modalMenuInfo?.description || ""}
        </p>
      </div>
      {/* Footer */}
      <></>
    </Modal>
  );
}

export default ModalMenuInfo;

//
//

//

// <Modal
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         title={modalMenuInfo?.name || ""}
//       >
//         {/* Body */}
//         <div className="w-full">
//           <img
//             src={modalMenuInfo?.image || ""}
//             alt={modalMenuInfo?.name || ""}
//             className="rounded-lg shadow-md mb-2 cursor-pointer w-full "
//           />
//           <div className="flex justify-end mt-3">
//             <OrderButton />
//             {orders.find((order) => order.id === modalMenuInfo?.id) && (
//               <ButtonCounter qty={order.id} />
//             )}
//           </div>
//           <h6 className="my-2 mt-1 text-md tracking-tight font-bold text-left truncate">
//             {convertAmountNumberToCurrencyString(modalMenuInfo?.price || 0)}
//           </h6>
//           <p className="text-sm tracking-tight text-left text-gray-500">
//             {modalMenuInfo?.description || ""}
//           </p>
//         </div>
//         {/* Footer */}
//         <></>
//       </Modal>

//       // const [modalMenuDescription, setModalMenuDescription] = useState("");

//
