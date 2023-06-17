import axios from "axios"
import { GET_DATA, TASK_COMPLETED, TASK_DELETED, TASK_STARTED } from "./actionType"

export const getDahsboardData  =(dispatch)=> {
    axios.get(`https://fitquestbackend.onrender.com/workout/dashboard`,{
        Authorization: `Bearer ${localStorage.getItem("token")}`
    })
    .then((res)=>{
        dispatch({type:GET_DATA,payload:res.data});
    })
}
export const completeData = (id)=>(dispatch)=>{
    dispatch({type:TASK_STARTED})
    axios.patch(`https://fitquestbackend.onrender.com/workout/dashboard/update/${id}`)
    .then(()=>dispatch({type:TASK_COMPLETED}))
}
export const deleteData = (id) => (dispatch)=>{
    dispatch({TASK_STARTED})
    axios.delete(`https://fitquestbackend.onrender.com/workout/dashboard/delete/${id}`)
    .then(()=>dispatch({type:TASK_DELETED}))
}

// export const updateData = (id,newData) =>{

// }