import { SEARCH_PRODUCTS } from "../actions/searchActions";

const initialState = {
  searchQuery: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
