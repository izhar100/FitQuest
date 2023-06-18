// import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Workout from "../pages/Workout/Workout";
import Progress from "../pages/Progress/Progress";
import Completed from "../pages/Completed/Completed";
import HireCoach from "../pages/HireCoach/HireCoach";
import Account from "../pages/Account/Account";
import Content from "../pages/Content/Content";
import DashboardMain from "../pages/Admin/DashboardMain";
import Singleworkout from "../pages/Workout/Singleworoutpage/Singleworkout";
import ProductList from "../pages/Admin/ProductList";
import AddWorkout from "../pages/Admin/AdminAddProduct";
import PrivateRoutes from "./PrivateRoutes";
import PaymentPage from "../pages/HireCoach/PaymentPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/coach" element={<HireCoach />} />
        <Route path="/account" element={
          <PrivateRoutes>
           <Account />
          </PrivateRoutes>
        } />
        <Route path="/content" element={<Content />} />
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/workout/:id" element={<Singleworkout />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<AddWorkout />} />
        <Route path="/payment" element={<PaymentPage />}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
