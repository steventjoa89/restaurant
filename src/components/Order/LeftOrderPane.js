import React, { useState } from "react";
import HeadingRow from "../HeadingRow";
import MenuCard from "../MenuCard";
import Categories from "../Categories";
import useOrderStore from "../../store/client/useOrderStore";
import MenuModal from "../MenuModal";

function LeftOrderPane({ data }) {
  const { orders } = useOrderStore();

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(null);

  // Categories Filter
  const handleCategoryClick = (category) => {
    // Show all data
    if (category === "All") {
      setActiveCategory("All");
      setFilteredData(null);
    }

    // Other than All
    if (category !== "All") {
      setActiveCategory(category);
      const filterData = data?.menu?.filter((dt) => dt.category === category);
      setFilteredData(filterData);
    }
  };

  // Modal Menu Info Description
  const [openModal, setOpenModal] = useState(false);
  const [modalMenuInfo, setModalMenuInfo] = useState(null);

  // Modal Menu Info Description
  const showMenuModalInfo = (id) => {
    const menuInfo = data?.menu?.filter((dt) => dt.id === id);
    if (menuInfo.length > 0) {
      setModalMenuInfo(menuInfo[0]);
      setOpenModal(true);
    }
  };

  return (
    <>
      <div
        className={`col-span-6 md:col-span-4 overflow-y-scroll h-screen hide-scrollbar mx-3 mb-${
          orders.length == 0 ? 0 : 20
        } md:mb-5`}
      >
        {/* Discount Menu */}
        {data?.discountMenu && (
          <>
            <div className="mt-3"></div>
            <HeadingRow text="Special Discount Today" textSize="lg" />
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {data?.discountMenu?.map((mn, i) => (
                <MenuCard
                  key={i}
                  {...mn}
                  showMenuModalInfo={showMenuModalInfo}
                />
              ))}
            </div>
          </>
        )}

        <div className="mt-3"></div>
        <HeadingRow text="Explore Our Best Menu" textSize="lg" />

        {/* Categories */}
        <div className="flex flex-nowrap overflow-x-auto ml-1 mb-3 hide-scrollbar">
          <Categories
            categories={data?.categories}
            activeCategory={activeCategory}
            onClick={handleCategoryClick}
          />
        </div>

        {/* Menu */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredData &&
            filteredData.map((mn, i) => (
              <MenuCard key={i} {...mn} showMenuModalInfo={showMenuModalInfo} />
            ))}
          {!filteredData &&
            data?.menu?.map((mn, i) => (
              <MenuCard key={i} {...mn} showMenuModalInfo={showMenuModalInfo} />
            ))}
        </div>
      </div>

      <MenuModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        menu={modalMenuInfo}
      />
    </>
  );
}

export default LeftOrderPane;
