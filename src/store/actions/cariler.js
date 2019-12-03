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
      .get("http://127.0.0.1:8000/api/cariler/", {
        Authorization: token
      })
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

export const cariEkle = (token, cariObj) => {
  return dispatch => {
    dispatch(cariEkleStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post("http://127.0.0.1:8000/api/cariler/", {
        Authorization: token,
        ...cariObj,
        tel_no: cariObj.prefix + cariObj.tel_no
      })
      .then(res => {
        console.log(res.data);
        const cariler = res.data;
        dispatch(cariEkleSuccess());
      })
      .catch(err => {
        dispatch(cariEkleFail(err));
      });
  };
};

export const cariEkleStart = () => {
  return {
    type: actionTypes.CARI_EKLE_START
  };
};

export const cariEkleSuccess = cari => {
  return {
    type: actionTypes.CARI_EKLE_SUCCESS,
    cari
  };
};

export const cariEkleFail = error => {
  return {
    type: actionTypes.CARI_EKLE_FAIL,
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
      .get(`http://127.0.0.1:8000/api/cariler/${id}/`)
      .then(res => {
        const cari = res.data;
        dispatch(getCariDetaySuccess(cari));
      })
      .catch(err => {
        dispatch(getCariDetayFail(err));
      });
  };
};
