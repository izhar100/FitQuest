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

const getToken = localStorage.getItem("token");
axios.defaults.headers.common = { Authorization: `Bearer ${getToken}` };
export const getProductData = (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`https://fitquestbackend.onrender.com/workout/all`)
    .then((res) => {
      dispatch(getSuccessProduct(res.data.all));
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
export const  getSingleProductData = (id) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`https://fitquestbackend.onrender.com/workout/running/${id}`)
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
      `https://fitquestbackend.onrender.com/workout/running/update/${id}`,
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
    .post(
      "https://tame-jade-cape-buffalo-suit.cyclic.app/workout/running/create",
      {
        headers: {
          Authorization: "Bearer " + getToken, //the token is a variable which holds the token
        },
      },
      payload
    )
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
    .delete(
      `https://fitquestbackend.onrender.com/workout/running/delete/${id}`,
      {
        headers: {
          Authorization: "Bearer " + getToken, //the token is a variable which holds the token
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
