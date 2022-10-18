import { apiRequest } from "../utils/api";

export const fetchSearchMovie = async (params) =>
  apiRequest({
    path: `/search/multi`,
    method: "GET",
    params,
  });
