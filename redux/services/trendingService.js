import { fetchTrendingList } from "../../services/trendingList";
import {
  getTrendingMoviesAction,
  getTrendingMoviesActionError,
  getTrendingMoviesActionSuccess,
  getTrendingTvAction,
  getTrendingTvActionError,
  getTrendingTvActionSuccess,
} from "../actions/trendingActions";

export const getTrendingMovieService = (time, type = "movie") => {
  return async (dispatch) => {
    dispatch(getTrendingMoviesAction());
    return fetchTrendingList(type, time)
      .then((res) => {
        dispatch(getTrendingMoviesActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(getTrendingMoviesActionError());
      });
  };
};

export const getTrendingTvService = (time, type = "tv") => {
  return async (dispatch) => {
    dispatch(getTrendingTvAction());
    return fetchTrendingList(type, time)
      .then((res) => {
        dispatch(getTrendingTvActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(getTrendingTvActionError());
      });
  };
};
