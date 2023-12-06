import { searchProductsApi } from "../../services/apiService";
import { SEARCH_PRODUCTS, receiveProducts } from "./actionType";

const searchProductsRequest =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type === SEARCH_PRODUCTS) {
      try {
        const data = await searchProductsApi(action.payload);

        dispatch(receiveProducts(data));
      } catch (error) {
        console.error("API error:", error);
      }
    }

    return next(action);
  };

export default searchProductsRequest;
