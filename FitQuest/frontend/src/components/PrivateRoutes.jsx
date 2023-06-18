import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../pages/Login/Login'
import DashboardMain from '../pages/Admin/DashboardMain'
import { useNavigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {isAuth,user}=useSelector((store)=>{
    return {
      isAuth:store.authReducer.isAuth,
      user:store.authReducer.user
    }
  })
  const navigate=useNavigate()
  console.log(user)
  if(isAuth){
    if(user.email=="admin@gmail.com"){
      return <DashboardMain/>
    }
    return children
  }else{
    return <Login/>
  }
}

export default PrivateRoutes
