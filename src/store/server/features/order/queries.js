import { useQuery } from "react-query";
import BASE_URL from "../../../../config/apiConfig";

const getAllMenu = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const useGetAllMenu = () => useQuery("menu", getAllMenu);
