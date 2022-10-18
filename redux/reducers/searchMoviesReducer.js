import {
  GET_SEARCH_MOVIES,
  GET_SEARCH_MOVIES_ERROR,
  GET_SEARCH_MOVIES_SUCCESS,
} from "../types/searchMoviesTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_SEARCH_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default searchMovieReducer;
