import React, { useState } from "react";
import FooterTotalOrder from "../../components/Order/FooterTotalOrder";
import NavbarOrder from "../../components/Order/NavbarOrder";

function OrderPage() {
  const [total, setTotal] = useState(0);

  return (
    <>
      {/* Navbar */}
      <NavbarOrder />

      {/* <button
        onClick={() => {
          setTotal(total + 10);
        }}
      >
        click me
      </button> */}

      {/* Sidebar */}
      {/* <Sidebar
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            <Sidebar.Item href="#" label="Pro" labelColor="dark">
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" label="3">
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar> */}

      {/* Footer Total Order Price */}
      <FooterTotalOrder total={total} />
    </>
  );
}

export default OrderPage;
