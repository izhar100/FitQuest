// import React from 'react';
import cycling from "./Images/cycling.jpg";
import './Dashboard.css';
import { Button,Text } from '@chakra-ui/react'
import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {
//   deleteProductData,
//   getProductData,
//   getSingleProductData,
// } from "../../redux/AdminProductReducer/action";

const Dashboard = () => {

  //
  // const [deleteId, setDeleteId] = useState("");
  // const data = useSelector((store) => {
  //   return store?.adminProductReducer?.products;
  // });

  // console.log(data);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductData);
  // }, [data]);

  // const removeProduct = (id) => {
  //   const button = document.querySelector(".modal-close");
  //   dispatch(deleteProductData(id));
  //   button.click();
  // };
  // const editProduct = (id) => {
  //   dispatch(getSingleProductData(id));
  // };
  //

  useEffect(()=>{
    fetch("https://tame-jade-cape-buffalo-suit.cyclic.app/workout/all",{
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0OGMwODhiMGJlN2Q0YTIzMzQzYTZlZSIsImZpcnN0TmFtZSI6InNhZ2FyIiwibGFzdE5hbWUiOiJkZXN3YWwiLCJlbWFpbCI6InNhZ2FyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JEFnSENYOFVrY1BUaTM5MHRpR3hJSU9SQ3JQVWY3S2VLUC40MGhzdWVuYnNHL1dkY3cxQ05PIiwibG9jYXRpb24iOiJSb2h0YWsiLCJhZ2UiOjI1fSwiaWF0IjoxNjg2ODk4ODYzfQ.Z3AuhbBzmXOuEp5eJp_qQxR-4mEnlhgbQjJixiF3DRA`
},
  }).then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));

  },[])

  return (
    <div className="dashboard">
      <div style={{height:"100vh"}}>
        <img src={cycling} alt="" className="background-image" />
      </div>
      <div className="image-overlay">
        <h1 className="text-over-image">Discover the power within you to overcome challenges, embrace victories, and inspire others through your athletic journey</h1>
        <Button className="join-now" colorScheme="orange" variant='outline'>
          Join Now
        </Button>
      </div>
      <div className="details" >
      <Text fontSize='5xl'>How Does FitQuest Help Me?</Text>
        <Text></Text>
        <h3>GET YOUR VERY OWN PERSONAL TRAINER THAT PROVIDES EVERYTHING YOU NEED TO GET IN THE BEST SHAPE OF YOUR LIFE.</h3>
      </div>
      {/* <table className="table table-centered table-nowrap mb-0 rounded">
              <thead className="thead-light">
                <tr>
                  <th className="border-0 rounded-start">Image</th>
                  <th className="border-0">Title</th>
                  <th className="border-0">Duration</th>
                  <th className="border-0">Distance</th>
                  <th className="border-0">Calories</th>
                  <th className="border-0">Terrain</th>
                  <th className="border-0">Pace</th>
                  <th className="border-0">Type</th>
                  <th className="border-0 rounded-end">Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item) => {
                    // const firstImage =
                    //   item.media.length > 0 ? item.media[0] : null;
                    return (
                      <tr key={item._id}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ height: "50px", width: "50px" }}
                          ></img>
                        </td>
                        <td>
                          <p className="small">{item.title}</p>
                        </td>
                        <td style={{ width: "20% !important;" }}>
                          <p className="small">{item.duration}</p>
                        </td>
                        <td>
                          <p className="small">{item.distance}</p>
                        </td>
                        <td style={{ width: "10% !important;" }}>
                          <b style={{ color: "green" }}>
                            {" "}
                            {item.caloriesBurned}
                          </b>
                        </td>
                        <td>
                          <b>{item.terrain}</b>
                        </td>
                        <td>
                          <b>{item.pace}</b>
                        </td>
                        <td>
                          <b>{item.type}</b>
                        </td>
                        <td>
                          <Link to={`/edit-product/${item._id}`}>
                            <span
                              className="me-3"
                              onClick={() => editProduct(item._id)}
                            >
                              Edit
                            </span>
                          </Link>
                          <span
                            data-bs-toggle="modal"
                            data-bs-target="#delete-modal"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => setDeleteId(item._id)}
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div
        className="modal fade"
        id="delete-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Are You sure want to Delete this product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-footer text-center">
              <button
                type="button"
                className="btn btn-secondary modal-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeProduct(deleteId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
