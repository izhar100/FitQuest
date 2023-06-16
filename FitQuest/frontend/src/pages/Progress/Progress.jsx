import React, { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { baseURL } from '../../url'
import ProgressCard from './ProgressCard'

const Progress = () => {
  const [workout,setWorkout]=useState([])
  useEffect(()=>{
    fetch(baseURL+"/workout/dashboard",{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.getItem("token")}`
      }
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      let proData=res.workout.filter((el)=>{
        return el.isCompleted==false;
      })
      console.log(proData)
      setWorkout(proData)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <Box w={"80%"} m={"auto"} mt={"50px"}>
      {workout?.map((el)=>{
        return (<ProgressCard key={el._id} {...el}/>)
      })}
    </Box>
  )
}

export default Progress
