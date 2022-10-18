import { apiRequest } from "../utils/api";

export const fetchTrendingList = async (type, time, params) =>
  apiRequest({
    //type : all, movie, tv, person
    //time : day, week
    path: `/trending/${type}/${time}`,
    method: "GET",
    params,
  });
