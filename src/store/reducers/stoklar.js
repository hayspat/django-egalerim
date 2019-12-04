import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  stoklar: [],
  currentStok: {},
  error: null,
  loading: false,
  aracResimleriLoading: false,
  ruhsatResimleriLoading: false
};

const getStokListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStokListSuccess = (state, action) => {
  return updateObject(state, {
    stoklar: action.stoklar,
    error: null,
    loading: false
  });
};

const getStokListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getStokDetayStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getStokDetaySuccess = (state, action) => {
  return updateObject(state, {
    currentStok: action.stok,
    error: null,
    loading: false
  });
};

const getStokDetayFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const stokEkleStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const stokEkleSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const stokEkleFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const patchAracResimleriStart = (state, action) => {
  return updateObject(state, {
    error: null,
    aracResimleriLoading: true
  });
};

const patchAracResimleriSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    aracResimleriLoading: false
  });
};

const patchAracResimleriFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    aracResimleriLoading: false
  });
};

const patchRuhsatResimleriStart = (state, action) => {
  return updateObject(state, {
    error: null,
    ruhsatResimleriLoading: true
  });
};

const patchRuhsatResimleriSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    ruhsatResimleriLoading: false
  });
};

const patchRuhsatResimleriFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    ruhsatResimleriLoading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STOK_LIST_START:
      return getStokListStart(state, action);
    case actionTypes.GET_STOK_LIST_SUCCESS:
      return getStokListSuccess(state, action);
    case actionTypes.GET_STOK_LIST_FAIL:
      return getStokListFail(state, action);
    case actionTypes.GET_STOK_DETAY_START:
      return getStokDetayStart(state, action);
    case actionTypes.GET_STOK_DETAY_SUCCESS:
      return getStokDetaySuccess(state, action);
    case actionTypes.GET_STOK_DETAY_FAIL:
      return getStokDetayFail(state, action);
    case actionTypes.STOK_EKLE_START:
      return stokEkleStart(state, action);
    case actionTypes.STOK_EKLE_SUCCESS:
      return stokEkleSuccess(state, action);
    case actionTypes.STOK_EKLE_FAIL:
      return stokEkleFail(state, action);
    case actionTypes.PATCH_ARAC_RESIMLERI_START:
      return patchAracResimleriStart(state, action);
    case actionTypes.PATCH_ARAC_RESIMLERI_SUCCESS:
      return patchAracResimleriSuccess(state, action);
    case actionTypes.PATCH_ARAC_RESIMLERI_FAIL:
      return patchAracResimleriFail(state, action);
    case actionTypes.PATCH_RUHSAT_RESIMLERI_START:
      return patchRuhsatResimleriStart(state, action);
    case actionTypes.PATCH_RUHSAT_RESIMLERI_SUCCESS:
      return patchRuhsatResimleriSuccess(state, action);
    case actionTypes.PATCH_RUHSAT_RESIMLERI_FAIL:
      return patchRuhsatResimleriFail(state, action);
    default:
      return state;
  }
};

export default reducer;
