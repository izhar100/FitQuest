import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Signup from '../pages/SignUp/Signup'
import Workout from '../pages/Workout/Workout'
import Progress from '../pages/Progress/Progress'
import Completed from '../pages/Completed/Completed'
import HireCoach from '../pages/HireCoach/HireCoach'
import Account from '../pages/Account/Account'
import Content from '../pages/Content/Content'
import Admin from '../pages/Admin/Admin'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/workout' element={<Workout/>} />
        <Route path='/progress' element={<Progress/>} />
        <Route path='/completed' element={<Completed/>} />
        <Route path='/coach' element={<HireCoach/>} />
        <Route path='/account' element={<Account/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </>
  )
}

export default AllRoutes
