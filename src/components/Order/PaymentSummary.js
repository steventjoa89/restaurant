import React from "react";
import ListRow from "../ListRow";
import { convertAmountNumberToString } from "../../utils/stringUtils";
import { Button } from "flowbite-react";

function PaymentSummary() {
  return (
    <div className="mr-2">
      <ListRow text="Subtotal" value={convertAmountNumberToString(123456789)} />
      <ListRow text="Tax" value={convertAmountNumberToString(123456789)} />
      <ListRow text="Service" value={convertAmountNumberToString(123456789)} />
      <hr className="my-2 border-gray-100" />
      <ListRow
        text="Total"
        textWeight="bold"
        value={convertAmountNumberToString(123456789)}
      />

      <div className="flex mt-3">
        <Button className="flex-grow" color="dark" pill>
          <span>Order Now</span>
        </Button>
      </div>
    </div>
  );
}

export default PaymentSummary;
