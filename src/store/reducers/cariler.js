import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  cariler: [],
  currentCari: {},
  error: null,
  loading: false
};

const getCariListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCariListSuccess = (state, action) => {
  return updateObject(state, {
    cariler: action.cariler,
    error: null,
    loading: false
  });
};

const getCariListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getCariDetayStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getCariDetaySuccess = (state, action) => {
  return updateObject(state, {
    currentCari: action.cari,
    error: null,
    loading: false
  });
};

const getCariDetayFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARI_LIST_START:
      return getCariListStart(state, action);
    case actionTypes.GET_CARI_LIST_SUCCESS:
      return getCariListSuccess(state, action);
    case actionTypes.GET_CARI_LIST_FAIL:
      return getCariListFail(state, action);
    case actionTypes.GET_CARI_DETAY_START:
      return getCariDetayStart(state, action);
    case actionTypes.GET_CARI_DETAY_SUCCESS:
      return getCariDetaySuccess(state, action);
    case actionTypes.GET_CARI_DETAY_FAIL:
      return getCariDetayFail(state, action);
    default:
      return state;
  }
};

export default reducer;
