import React, { useState } from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";
import RightOrderPane from "../../components/order/RightOrderPane";
import LeftOrderPane from "../../components/order/LeftOrderPane";

function OrderPage() {
  const [totalItem, setTotalItem] = useState(0);

  return (
    <>
      <NavbarOrder />
      <div className="grid grid-cols-6 gap-3">
        <LeftOrderPane />
        <RightOrderPane />
      </div>

      <FooterOrder totalItem={totalItem} />
    </>
  );
}

export default OrderPage;
