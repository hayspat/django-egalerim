import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getCariListStart = () => {
  return {
    type: actionTypes.GET_CARI_LIST_START
  };
};

export const getCariListSuccess = cariler => {
  return {
    type: actionTypes.GET_CARI_LIST_SUCCESS,
    cariler
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

export const getCariDetayStart = () => {
  return {
    type: actionTypes.GET_CARI_DETAY_START
  };
};

export const getCariDetaySuccess = cari => {
  return {
    type: actionTypes.GET_CARI_DETAY_SUCCESS,
    cari
  };
};

export const getCariDetayFail = error => {
  return {
    type: actionTypes.GET_CARI_DETAY_FAIL,
    error: error
  };
};

export const getCariDetay = (token, id) => {
  return dispatch => {
    dispatch(getCariDetayStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/cariler/${id}/`)
      .then(res => {
        const cari = res.data;
        dispatch(getCariDetaySuccess(cari));
      })
      .catch(err => {
        dispatch(getCariDetayFail(err));
      });
  };
};
