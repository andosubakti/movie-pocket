import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "./reducers/detailreducer";
import searchMovieReducer from "./reducers/searchMoviesReducer";
import trendingReducer from "./reducers/trendingReducer";

export default configureStore({
  reducer: {
    searchMovies: searchMovieReducer,
    trending: trendingReducer,
    detail: detailReducer,
  },
});
