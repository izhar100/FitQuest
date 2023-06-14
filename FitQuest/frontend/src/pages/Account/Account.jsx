import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  const {isAuth}=useSelector((store)=>{
    console.log(store)
    return {
      isAuth:store.authReducer.isAuth
    }
  })
  return (
    <div>
      Account Page
    </div>
  )
}

export default Account
