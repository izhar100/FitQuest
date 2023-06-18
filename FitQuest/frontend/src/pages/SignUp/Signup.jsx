import { Box, Button, Flex, FormLabel, Heading, Image, Input, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { baseURL } from '../../url'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState(0)
  const [location, setlocation] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const toast=useToast()
  const navigate=useNavigate()

  const handleForm = () => {
    if(firstName==""||lastName==""||age==0 || location==""||email==""||password==""){
      toast({
        title: 'All fields are required',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position:'top'
    })
    }else{
      const signupData = {
        firstName,
        lastName,
        age: Number(age),
        location,
        email,
        password
      }
      axios.post(baseURL + `/users/register`, signupData).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }


  return (
    <>
      <Image src='https://img.freepik.com/free-vector/guy-lifting-barbell-young-man-sportswear-cartoon-character-weightlifting-bodybuilder-working-out-with-dumbbell-muscle-training-physical-exercise-fitness-workout_575670-2151.jpg?w=996&t=st=1686829099~exp=1686829699~hmac=9fc8ab279e20096a6d75ed5ec80f1566b53b8b6f669c10f3ca06a5520e751056' width={"100%"} height={"100vh"} position={"absolute"} />
      <Box position={"relative"}>
        <Box bgColor={"#0f0f0f69"} height={"100vh"}>
          <br />
          <Heading textAlign={"center"} color={"white"}>Create Account</Heading>
          <br />
          <Box width={{ xl: "30%", lg: "30%", md: "30%", sm: "80%",base:"80%" }} m={"auto"} bgColor={"#ffffff63"} p={"20px"} borderRadius={"20px"}>
            <Flex gap={"20px"} justifyContent={"center"}>
              <Box>
                <FormLabel>First Name</FormLabel>
                <Input type='text' placeholder='first name' value={firstName} onChange={(e) => setfirstName(e.target.value)} />
              </Box>
              <Box>
                <FormLabel>Last Name</FormLabel>
                <Input type='text' placeholder='last name' value={lastName} onChange={(e) => setlastName(e.target.value)} />
              </Box>
            </Flex>
            <br />
            <Flex gap={"20px"} justify={"center"}>
              <Box>
                <FormLabel>Age</FormLabel>
                <Input type='number' placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} />
              </Box>
              <Box>
                <FormLabel>Location</FormLabel>
                <Input type='text' placeholder='location' value={location} onChange={(e) => setlocation(e.target.value)} />
              </Box>
            </Flex>
            <br />
            <Flex gap={"20px"} justify={"center"}>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)} />
              </Box>
            </Flex>
            <br />
            <br />
            <Box bgColor={"#0080ff"} p={"5px"} pt={"8px"} pb={"8px"} textAlign={"center"} w={"150px"} m={"auto"} borderRadius={"8px"} _hover={{ cursor: "pointer" }} onClick={handleForm}>
              <Text as={"b"} color={"white"}>Create Account</Text>
            </Box>
            <br />
          </Box>
          <br />
          <br />
          <Box textAlign={"center"}><Text fontSize={"20px"} as={"b"} color={"white"}>Already have an account? <span style={{color:"blue",cursor:"pointer",fontSize:"20px",color:"#d9ff00"}} onClick={()=>navigate("/login")}>Login</span>
          </Text></Box>
        </Box>

      </Box>
    </>
  )
}

export default Signup
