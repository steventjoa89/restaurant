import React from "react";
// import NavbarOrder from "../../components/order/NavbarOrder";
// import FooterOrder from "../../components/order/FooterOrder";
// import RightOrderPane from "../../components/order/RightOrderPane";
// import LeftOrderPane from "../../components/order/LeftOrderPane";
import { useGetAllMenu } from "../../store/server/features/order/queries";
import useOrderStore from "../../store/client/useOrderStore";
import OrderSidebar from "../../components/order/OrderSidebar";
import OrderNavbar from "../../components/order/OrderNavbar";
// import Loader from "../../components/Loader";

function OrderPage() {
  const { isLoading, error, data } = useGetAllMenu();

  const { orders } = useOrderStore();

  return (
    <>
      <OrderNavbar />

      <OrderSidebar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 ">
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:mr-80 "
        >
          <main>This is main content</main>
        </div>
      </div>
    </>
    // <>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <>
    //       <NavbarOrder />
    //       <div className="grid grid-cols-6 gap-3">
    //         <LeftOrderPane data={data} />
    //         <RightOrderPane />
    //       </div>
    //       {orders.length > 0 && <FooterOrder />}
    //     </>
    //   )}
    // </>
    // <div>Hello World</div>
  );
}

export default OrderPage;
