import React, { useState } from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";
import OrderRightPane from "../../components/order/OrderRightPane";

function OrderPage() {
  const [totalItem, setTotalItem] = useState(0);

  return (
    <>
      <NavbarOrder />

      <div className="grid grid-cols-6 gap-3">
        <div className="bg-blue-100 col-span-6 md:col-span-4 overflow-y-scroll h-screen hide-scrollbar">
          {/* TODO: */}
          {/* {[...Array(100)].map((x, i) => (
            <div>11</div>
          ))} */}
        </div>
        <OrderRightPane />
      </div>

      <FooterOrder totalItem={totalItem} />
    </>
  );
}

export default OrderPage;
