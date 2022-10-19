import {
  GET_DETAIL_DATA,
  GET_DETAIL_DATA_ERROR,
  GET_DETAIL_DATA_SUCCESS,
} from "../types/detailTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_DETAIL_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_DETAIL_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default detailReducer;
