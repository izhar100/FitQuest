import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login/Login'

const PrivateRoutes = ({children}) => {
  const {isAuth}=useSelector((store)=>{
    return {
      isAuth:store.authReducer.isAuth
    }
  })
  return isAuth?children:<Login/>
}

export default PrivateRoutes
