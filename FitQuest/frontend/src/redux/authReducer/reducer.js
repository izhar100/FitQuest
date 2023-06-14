import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initState={
    isAuth:localStorage.getItem("isAuth")||false,
    token:localStorage.getItem("token")||"",
    errMessage:"",
    isLoading:false,
    isErorr:false
}

export const reducer=(state=initState,{type,payload})=>{
        switch(type){
            case LOGIN_REQUEST:{
                return {...state,isLoading:true}
            }
            case LOGIN_SUCCESS:{
                localStorage.setItem("token",payload)
                localStorage.setItem("isAuth",true)
                return {...state,isLoading:false,isAuth:true,token:payload}
            }
            case LOGIN_FAILURE:{
                return {...state,isLoading:false,isErorr:true,errMessage:payload}
            }
            default:{
                return state
            }
              
        }
}