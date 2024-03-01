import React from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";
import RightOrderPane from "../../components/order/RightOrderPane";
import LeftOrderPane from "../../components/order/LeftOrderPane";
import { useGetDishes } from "../../store/server/features/order/queries";

function OrderPage() {
  const { isLoading, error, data } = useGetDishes();

  return (
    <>
      <NavbarOrder />
      <div className="grid grid-cols-6 gap-3">
        <LeftOrderPane data={data} />
        <RightOrderPane data={data} />
      </div>

      <FooterOrder totalItem={0} />
    </>
  );
}

export default OrderPage;
