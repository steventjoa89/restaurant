import React from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";
import RightOrderPane from "../../components/order/RightOrderPane";
import LeftOrderPane from "../../components/order/LeftOrderPane";

function OrderPage() {
  return (
    <>
      <NavbarOrder />
      <div className="grid grid-cols-6 gap-3">
        <LeftOrderPane />
        <RightOrderPane />
      </div>

      <FooterOrder totalItem={0} />
    </>
  );
}

export default OrderPage;
