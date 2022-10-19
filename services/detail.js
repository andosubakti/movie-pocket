import { apiRequest } from "../utils/api";

export const fetchDetail = async (type, id, params) =>
  apiRequest({
    //type : movie, id
    path: `/${type}/${id}`,
    method: "GET",
    params,
  });
