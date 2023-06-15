import { baseURL } from "../../url"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const login=(loginData)=>(dispatch)=>{
  dispatch({type:LOGIN_REQUEST})
  fetch(baseURL+`/users/login`,{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify(loginData)
  }).then(res=>res.json()).then((res)=>{
    console.log(res)
    dispatch({type:LOGIN_SUCCESS,payload:res})
  }).catch((err)=>{
    dispatch({type:LOGIN_FAILURE,payload:err.message})
  })
}