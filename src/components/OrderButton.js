import { Button } from "flowbite-react";
import React from "react";

function OrderButton({ onClick }) {
  return (
    <Button color="dark" pill size="xs" onClick={onClick} className="h-7">
      Order
    </Button>
  );
}

export default OrderButton;
