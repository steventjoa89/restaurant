import React, { useState } from "react";
import { useGetAllMenu } from "../../store/server/features/order/queries";
import useOrderStore from "../../store/client/useOrderStore";
import OrderSidebar from "../../components/order/OrderSidebar";
import Navbar from "../../components/Navbar";
import OrderMenuCard from "../../components/order/OrderMenuCard";
import OrderMenuCategories from "../../components/order/OrderMenuCategories";
import OrderBottombar from "../../components/order/OrderBottombar";
import Loader from "../../components/Loader";
import ModalMenuInfo from "../../components/ModalMenuInfo";
import Error from "../../components/error/Error";
import useOrderedStore from "../../store/client/useOrderedStore";
import OrderMenuPagination from "../../components/order/OrderMenuPagination";
import { TOTAL_ITEM_IN_PAGE } from "../../data/info";

function OrderPage() {
  const { isLoading, error, data } = useGetAllMenu();
  const { orders, incrementOrder, decrementOrder } = useOrderStore();
  const { ordered } = useOrderedStore();

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(0);

  // Menu Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMenuInfo, setModalMenuInfo] = useState(null);

  const toggleModal = () => {
    const modalStatus = !isModalOpen;
    if (modalStatus === false) {
      setModalMenuInfo(null);
    }
    setIsModalOpen(modalStatus);
  };

  const onShowMenuInfo = (menu) => {
    setModalMenuInfo(menu);
    setIsModalOpen(true);
  };

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

  // Increment & Decrement the Orders
  const onIncrementOrder = (menu) => {
    incrementOrder(menu);
  };

  const onDecrementOrder = (menu) => {
    decrementOrder(menu);
  };

  const onRefreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error onClick={onRefreshPage} />
      ) : (
        <>
          <div
            className={`flex pt-16 overflow-hidden bg-gray-50 ${
              orders?.length > 0 || ordered?.length > 0 ? "mb-14" : "mb-0"
            } lg:mb-0`}
          >
            <div
              id="main-content"
              className="relative w-full h-full overflow-y-auto bg-gray-50 lg:mr-80 "
            >
              <main className="px-4 pt-6 pb-6">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {/* Main Menu Categories */}
                  <OrderMenuCategories
                    categories={data?.categories}
                    activeCategory={activeCategory}
                    onClick={onCategoryClick}
                  />

                  {/* Main Menu Items */}
                  {(filteredData || data?.menu)
                    ?.slice(
                      currentPage * TOTAL_ITEM_IN_PAGE,
                      (currentPage + 1) * TOTAL_ITEM_IN_PAGE
                    )
                    .map((menu, i) => (
                      <OrderMenuCard
                        key={i}
                        menu={menu}
                        orders={orders}
                        onIncrementOrder={onIncrementOrder}
                        onDecrementOrder={onDecrementOrder}
                        showMenuInfo={onShowMenuInfo}
                        // showMenuModalInfo={showMenuModalInfo}
                      />
                    ))}
                </div>
                <OrderMenuPagination
                  totalItems={(filteredData || data?.menu)?.length}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </main>
            </div>
          </div>

          {/* Desktop Sidebar Order Screen */}
          <OrderSidebar />

          {/* Mobile Bottombar Order Screen */}
          <OrderBottombar />

          <ModalMenuInfo
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
            modalMenuInfo={modalMenuInfo}
            orders={orders}
            onIncrementOrder={onIncrementOrder}
            onDecrementOrder={onDecrementOrder}
          />
        </>
      )}
    </>
  );
}

export default OrderPage;
