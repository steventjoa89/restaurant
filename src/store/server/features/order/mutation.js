import { useMutation } from "react-query";
import BASE_URL from "../../../../config/apiConfig";

const addOrder = async (orders) => {
  const body = { orders };
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to add orders");
  }
  return res.json();
};

export const useAddOrder = () =>
  useMutation(addOrder, {
    onSuccess: () => {
      console.log("Orders added successfully");
      // Handle success, e.g., show a success message
    },
    onError: (error) => {
      console.error("Failed to add orders:", error);
      // Handle error, e.g., show an error message
    },
  });
