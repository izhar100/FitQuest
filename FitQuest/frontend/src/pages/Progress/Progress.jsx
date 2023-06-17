import React, { useEffect, useState } from 'react'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { baseURL } from '../../url'
import ProgressCard from './ProgressCard'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Progress = () => {
  const [workout, setWorkout] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate=useNavigate()
  useEffect(() => {
    fetch(baseURL + "/workout/dashboard", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      return res.json()
    }).then((res) => {
      let proData = res.workout.filter((el) => {
        return el.isCompleted == false;
      })
      console.log(proData)
      setWorkout(proData)
      setLoading(false)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  if (loading) {
    return (
      <Stack width={"80%"} m={"auto"} mt={"50px"} mb={"50px"}>
        <Skeleton startColor='yellow.500' endColor='orange.500' height='100px' borderRadius={"20px"} />
        <br />
        <Skeleton startColor='yellow.500' endColor='orange.500' height='100px' borderRadius={"20px"} />
        <br />
        <Skeleton startColor='yellow.500' endColor='orange.500' height='100px' borderRadius={"20px"} />
        <br />
        <Skeleton startColor='yellow.500' endColor='orange.500' height='100px' borderRadius={"20px"} />
      </Stack>
    )
  }

  if(workout.length==0){
    return (
      <Box w={"80%"} m={"auto"} mt={"50px"}>
        <Heading textAlign={"center"}>There is no any workout to show here</Heading>
        <br />
        <Text textAlign={"center"} fontSize={"25px"}>Go to <span style={{color:"blue",cursor:"pointer"}}onClick={()=>navigate("/workout")}>workout</span> page to add some workout</Text>
        <br />
    </Box>
    )
  }

  return (
    <>
      <br />
      <Heading textAlign={"center"}>Today's incomplete workouts</Heading>
      <Box w={"80%"} m={"auto"} mt={"50px"}>
        {workout?.map((el) => {
          return (<ProgressCard key={el._id} {...el} />)
        })}
      </Box>
    </>
  )
}

export default Progress
