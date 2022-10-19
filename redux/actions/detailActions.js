import {
  GET_DETAIL_DATA,
  GET_DETAIL_DATA_ERROR,
  GET_DETAIL_DATA_SUCCESS,
} from "../types/detailTypes";

export const getDetailDataAction = () => ({
  type: GET_DETAIL_DATA,
});

export const getDetailDataActionSuccess = (data) => ({
  type: GET_DETAIL_DATA_SUCCESS,
  payload: data,
});

export const getDetailDataActionError = () => ({
  type: GET_DETAIL_DATA_ERROR,
});
