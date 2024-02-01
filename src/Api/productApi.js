import apiCall from "./index";

export const fetchProducts = async () => {
  let res = await apiCall.get("products");
  // return res;
  return {
    data: res.data,
    status: res.status,
  };
};
export const fetchSingleProduct = async (id) => {
  let res = await apiCall.get(`products/${id}`);
  // return res;
  return {
    data: res.data,
    status: res.status,
  };
};
