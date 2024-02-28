import React from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";

function OrderPage() {
  return (
    <>
      <NavbarOrder />

      <div>Menu Dishes</div>
      <div>Sidebar</div>

      <FooterOrder />
    </>
  );
}

export default OrderPage;
