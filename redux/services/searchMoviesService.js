import { fetchSearchMovie } from "../../services/searchMovies";
import {
  getSearchMoviesAction,
  getSearchMoviesActionError,
  getSearchMoviesActionSuccess,
} from "../actions/searchMoviesActions";

export const getSearchMovieService = (value, page) => {
  const params = {
    page: page,
    query: value,
  };
  return async (dispatch) => {
    dispatch(getSearchMoviesAction());
    return fetchSearchMovie(params)
      .then((res) => {
        dispatch(getSearchMoviesActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(getSearchMoviesActionError());
      });
  };
};
