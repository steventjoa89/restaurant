import { useQuery } from "react-query";
import BASE_URL from "../../../../config/apiConfig";

const getDishes = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const useGetDishes = () => useQuery("dishes", getDishes);
