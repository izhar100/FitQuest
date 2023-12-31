import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionType"

const initState={
    isAuth:localStorage.getItem("isAuth")||false,
    token:localStorage.getItem("token")||"",
    user:localStorage.getItem("user")||{},
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
                localStorage.setItem("token",payload.token)
                localStorage.setItem("isAuth",true)
                localStorage.setItem("user",JSON.stringify(payload.user))
                return {...state,isLoading:false,isAuth:true,token:payload.token,user:payload.user}
            }
            case LOGIN_FAILURE:{
                return {...state,isLoading:false,isErorr:true,errMessage:payload}
            }
            case LOG_OUT:{
                localStorage.setItem("token","")
                localStorage.setItem("isAuth",false)
                localStorage.setItem("user",JSON.stringify({}))
                return {...state,isAuth:false,token:"",user:{}}
            }
            default:{
                return state
            }
              
        }
}