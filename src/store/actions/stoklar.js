import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getStokListStart = () => {
  return {
    type: actionTypes.GET_STOK_LIST_START
  };
};

export const getStokListSuccess = stoklar => {
  return {
    type: actionTypes.GET_STOK_LIST_SUCCESS,
    stoklar
  };
};

export const getStokListFail = error => {
  return {
    type: actionTypes.GET_STOK_LIST_FAIL,
    error: error
  };
};

export const getStokList = token => {
  return dispatch => {
    dispatch(getStokListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/api/stoklar/", {
        Authorization: token
      })
      .then(res => {
        const stoklar = res.data;
        dispatch(getStokListSuccess(stoklar));
      })
      .catch(err => {
        dispatch(getStokListFail(err));
      });
  };
};

export const getStokDetayStart = () => {
  return {
    type: actionTypes.GET_STOK_DETAY_START
  };
};

export const getStokDetaySuccess = stok => {
  return {
    type: actionTypes.GET_STOK_DETAY_SUCCESS,
    stok
  };
};

export const getStokDetayFail = error => {
  return {
    type: actionTypes.GET_STOK_DETAY_FAIL,
    error: error
  };
};

export const stokEkle = (token, stokObj) => {
  return dispatch => {
    dispatch(stokEkleStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post("http://127.0.0.1:8000/api/stoklar/", {
        ...stokObj,
        aracResim: undefined,
        ruhsatResim: undefined
      })
      .then(res => {
        console.log(res.data);
        dispatch(stokEkleSuccess());
        console.log(stokObj.aracResim);
        if (stokObj.aracResim) {
          dispatch(patchAracResimleriStart());
          dispatch(patchAracResimleri(token, stokObj.aracResim, res.data.url));
        }
        if (stokObj.ruhsatResim) {
          dispatch(patchRuhsatResimleriStart());
          dispatch(
            patchRuhsatResimleri(token, stokObj.ruhsatResim, res.data.url)
          );
        }
      })
      .catch(err => {
        dispatch(stokEkleFail(err));
        if (stokObj.aracResim) {
          dispatch(patchAracResimleriFail());
        }
        if (stokObj.ruhsatResim) {
          dispatch(patchRuhsatResimleriFail());
        }
      });
  };
};

export const stokEkleStart = () => {
  return {
    type: actionTypes.STOK_EKLE_START
  };
};

export const stokEkleSuccess = stok => {
  return {
    type: actionTypes.STOK_EKLE_SUCCESS,
    stok
  };
};

export const stokEkleFail = error => {
  return {
    type: actionTypes.STOK_EKLE_FAIL,
    error: error
  };
};

export const patchAracResimleri = (token, aracResim, url) => {
  return dispatch => {
    for (let resim of aracResim) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .patch(resim.response.url, {
          stoklar: url
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          dispatch(patchAracResimleriFail(err));
        });
    }
    dispatch(patchAracResimleriSuccess());
  };
};

export const patchAracResimleriStart = () => {
  return {
    type: actionTypes.PATCH_ARAC_RESIMLERI_START
  };
};

export const patchAracResimleriSuccess = stok => {
  return {
    type: actionTypes.PATCH_ARAC_RESIMLERI_SUCCESS,
    stok
  };
};

export const patchAracResimleriFail = error => {
  return {
    type: actionTypes.PATCH_ARAC_RESIMLERI_FAIL,
    error: error
  };
};

export const patchRuhsatResimleri = (token, ruhsatResim, url) => {
  return dispatch => {
    for (let resim of ruhsatResim) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios
        .patch(resim.response.url, {
          stoklar: url
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          dispatch(patchRuhsatResimleriFail(err));
        });
    }
    dispatch(patchRuhsatResimleriSuccess());
  };
};

export const patchRuhsatResimleriStart = () => {
  return {
    type: actionTypes.PATCH_RUHSAT_RESIMLERI_START
  };
};

export const patchRuhsatResimleriSuccess = stok => {
  return {
    type: actionTypes.PATCH_RUHSAT_RESIMLERI_SUCCESS,
    stok
  };
};

export const patchRuhsatResimleriFail = error => {
  return {
    type: actionTypes.PATCH_RUHSAT_RESIMLERI_FAIL,
    error: error
  };
};

export const getStokDetay = (token, id) => {
  return dispatch => {
    dispatch(getStokDetayStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/api/stoklar/${id}/`)
      .then(res => {
        const stok = res.data;
        dispatch(getStokDetaySuccess(stok));
      })
      .catch(err => {
        dispatch(getStokDetayFail(err));
      });
  };
};
