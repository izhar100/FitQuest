import {
  ADMIN_GET_DATA_FAILURE,
  ADMIN_GET_DATA_REQUEST,
  ADMIN_GET_DATA_SUCCESS,
  ADMIN_POST_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT_SUCCESS,
  ADMIN_GET_SINGLE_DATA_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestProduct = () => {
  return { type: ADMIN_GET_DATA_REQUEST };
};
export const postProductSuccess = (payload) => {
  return { type: ADMIN_POST_PRODUCT_SUCCESS };
};

export const getSuccessProduct = (payload) => {
  return { type: ADMIN_GET_DATA_SUCCESS, payload };
};
export const getSuccessSingleProduct = (payload) => {
  return { type: ADMIN_GET_SINGLE_DATA_SUCCESS, payload };
};

export const getFailureProduct = () => {
  return { type: ADMIN_GET_DATA_FAILURE };
};

export const deleteProductSuccess = (payload) => {
  return { type: ADMIN_DELETE_PRODUCT_SUCCESS };
};

export const getProductData = (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`https://tame-jade-cape-buffalo-suit.cyclic.app/workout/all`)
    .then((res) => {
      dispatch(getSuccessProduct(res.data));
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
export const getSingleProductData = (id) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`https://distinct-blue-blazer.cyclic.app/pharma/${id}`)
    .then((res) => {
      dispatch(getSuccessSingleProduct(res.data));
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
export const getSingleEditProductData = (id, newData) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .patch(
      `https://distinct-blue-blazer.cyclic.app/pharma/update/${id}`,
      newData
    )
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};

export const addProduct = (payload) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .post("https://distinct-blue-blazer.cyclic.app/pharma/add", payload)
    .then(() => {
      dispatch(postProductSuccess());
    })
    .catch((err) => {
      dispatch(getFailureProduct());
    });
};
export const deleteProductData = (id) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .delete(`https://distinct-blue-blazer.cyclic.app/pharma/delete/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
