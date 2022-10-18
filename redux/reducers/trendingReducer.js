import { combineReducers } from "@reduxjs/toolkit";
import {
  GET_TRENDING_MOVIES,
  GET_TRENDING_MOVIES_ERROR,
  GET_TRENDING_MOVIES_SUCCESS,
  GET_TRENDING_TV,
  GET_TRENDING_TV_ERROR,
  GET_TRENDING_TV_SUCCESS,
} from "../types/trendingTypes";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_TRENDING_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const tv = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_TV:
      return {
        ...state,
        loading: true,
      };
    case GET_TRENDING_TV_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_TRENDING_TV_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

const trendingReducer = combineReducers({
  movie,
  tv,
});

export default trendingReducer;
