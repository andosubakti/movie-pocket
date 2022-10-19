import { fetchDetail } from "../../services/detail";

import {
  getDetailDataAction,
  getDetailDataActionError,
  getDetailDataActionSuccess,
} from "../actions/detailActions";

export const getDetailDataService = (id, type) => {
  return async (dispatch) => {
    dispatch(getDetailDataAction());
    return fetchDetail(type, id)
      .then((res) => {
        dispatch(getDetailDataActionSuccess(res.data));
      })
      .catch(() => {
        dispatch(getDetailDataActionError());
      });
  };
};
