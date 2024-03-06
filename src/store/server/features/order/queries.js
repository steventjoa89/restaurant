import { useQuery } from "react-query";
import BASE_URL from "../../../../config/apiConfig";
import useOrderedStore from "../../../client/useOrderedStore";

const getAllMenu = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const useGetAllMenu = () => {
  const { setOrdered } = useOrderedStore();

  const { isLoading, error, data } = useQuery("menu", getAllMenu, {
    onSuccess: (data) => {
      // Check if response contains ordered menu
      if (data && data.ordered) {
        setOrdered(data.ordered);
      }
    },
  });
  return { isLoading, error, data };
};
