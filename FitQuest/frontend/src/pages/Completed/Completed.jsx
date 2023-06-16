import React, { useEffect, useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { baseURL } from '../../url'
import CompletedCard from './CompletedCard'

const Completed = () => {
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
        return el.isCompleted==true;
      })
      console.log(proData)
      setWorkout(proData)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <>
    <br />
    <Heading textAlign={"center"}>Today's completed workouts</Heading>
    <Box w={"80%"} m={"auto"} mt={"50px"}>
      {workout?.map((el)=>{
        return (<CompletedCard key={el._id} {...el}/>)
      })}
    </Box>
    </>
  )
}

export default Completed
