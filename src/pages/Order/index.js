import React from "react";
import NavbarOrder from "../../components/order/NavbarOrder";
import FooterOrder from "../../components/order/FooterOrder";
import RightOrderPane from "../../components/order/RightOrderPane";
import LeftOrderPane from "../../components/order/LeftOrderPane";
import { useGetAllMenu } from "../../store/server/features/order/queries";
import useOrderStore from "../../store/client/useOrderStore";
import Loader from "../../components/Loader";

function OrderPage() {
  const { isLoading, error, data } = useGetAllMenu();

  const { orders } = useOrderStore();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavbarOrder />
          <div className="grid grid-cols-6 gap-3">
            <LeftOrderPane data={data} />
            <RightOrderPane />
          </div>
          {orders.length > 0 && <FooterOrder />}
        </>
      )}
    </>
  );
}

export default OrderPage;
