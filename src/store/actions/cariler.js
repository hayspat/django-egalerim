import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getCariListStart = () => {
  return {
    type: actionTypes.GET_CARI_LIST_START
  };
};

export const getCariListSuccess = token => {
  return {
    type: actionTypes.GET_CARI_LIST_SUCCESS,
    token: token
  };
};

export const getCariListFail = error => {
  return {
    type: actionTypes.GET_CARI_LIST_FAIL,
    error: error
  };
};

export const getCariList = token => {
  return dispatch => {
    dispatch(getCariListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/cariler/")
      .then(res => {
        const cariler = res.data;
        dispatch(getCariListSuccess(cariler));
      })
      .catch(err => {
        dispatch(getCariListFail(err));
      });
  };
};
