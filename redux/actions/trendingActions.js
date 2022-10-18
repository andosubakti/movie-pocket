import {
  GET_TRENDING_MOVIES,
  GET_TRENDING_MOVIES_ERROR,
  GET_TRENDING_MOVIES_SUCCESS,
  GET_TRENDING_TV,
  GET_TRENDING_TV_ERROR,
  GET_TRENDING_TV_SUCCESS,
} from "../types/trendingTypes";

export const getTrendingMoviesAction = () => ({
  type: GET_TRENDING_MOVIES,
});

export const getTrendingMoviesActionSuccess = (data) => ({
  type: GET_TRENDING_MOVIES_SUCCESS,
  payload: data,
});

export const getTrendingMoviesActionError = () => ({
  type: GET_TRENDING_MOVIES_ERROR,
});

export const getTrendingTvAction = () => ({
  type: GET_TRENDING_TV,
});

export const getTrendingTvActionSuccess = (data) => ({
  type: GET_TRENDING_TV_SUCCESS,
  payload: data,
});

export const getTrendingTvActionError = () => ({
  type: GET_TRENDING_TV_ERROR,
});
