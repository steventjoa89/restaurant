import React, { useState } from "react";
// import NavbarOrder from "../../components/order/NavbarOrder";
// import FooterOrder from "../../components/order/FooterOrder";
// import RightOrderPane from "../../components/order/RightOrderPane";
// import LeftOrderPane from "../../components/order/LeftOrderPane";
import { useGetAllMenu } from "../../store/server/features/order/queries";
import useOrderStore from "../../store/client/useOrderStore";
import OrderSidebar from "../../components/order/OrderSidebar";
import OrderNavbar from "../../components/order/OrderNavbar";
import OrderMenuCard from "../../components/order/OrderMenuCard";
import OrderMenuCategories from "../../components/order/OrderMenuCategories";
// import Loader from "../../components/Loader";

function OrderPage() {
  const { isLoading, error, data } = useGetAllMenu();
  const { orders } = useOrderStore();

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(null);

  // Categories Filter
  const onCategoryClick = (category) => {
    // Show all data
    if (category === "All") {
      setActiveCategory("All");
      setFilteredData(null);
    }

    // Other than All
    if (category !== "All") {
      setActiveCategory(category);
      const filterData = data?.menu?.filter((dt) =>
        dt.categories?.includes(category)
      );

      setFilteredData(filterData);
    }
  };

  return (
    <>
      <OrderNavbar />

      <div className="flex pt-16 overflow-hidden bg-gray-50 ">
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:mr-80 "
        >
          <main className="px-4 pt-6 pb-6">
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Main Menu Categories */}
              <OrderMenuCategories
                categories={data?.categories}
                activeCategory={activeCategory}
                onClick={onCategoryClick}
              />

              {/* Main Menu Items */}
              {/* {data?.menu?.map((menu, i) => (
                <OrderMenuCard key={i} {...menu} />
              ))} */}
              {filteredData &&
                filteredData.map((menu, i) => (
                  <OrderMenuCard
                    key={i}
                    {...menu}
                    // showMenuModalInfo={showMenuModalInfo}
                  />
                ))}
              {!filteredData &&
                data?.menu?.map((menu, i) => (
                  <OrderMenuCard
                    key={i}
                    {...menu}
                    // showMenuModalInfo={showMenuModalInfo}
                  />
                ))}
            </div>
          </main>
        </div>
      </div>

      <OrderSidebar />
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
