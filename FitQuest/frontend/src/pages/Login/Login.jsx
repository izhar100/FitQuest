import { Box, Button, Flex, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/authReducer/action'

const Login = () => {
  const {isAuth}=useSelector((store)=>{
    console.log(store)
    return {
      isAuth:store.authReducer.isAuth
    }
  },shallowEqual)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{
    if(isAuth){
      navigate("/")
    }
  },[isAuth])

  const handleForm = () => {
    const loginData = {
      email,
      password
    }
    dispatch(login(loginData))
  }

  


  return (
    <>
      <Image src='https://img.freepik.com/free-vector/guy-lifting-barbell-young-man-sportswear-cartoon-character-weightlifting-bodybuilder-working-out-with-dumbbell-muscle-training-physical-exercise-fitness-workout_575670-2151.jpg?w=996&t=st=1686829099~exp=1686829699~hmac=9fc8ab279e20096a6d75ed5ec80f1566b53b8b6f669c10f3ca06a5520e751056' width={"100%"} height={"100vh"} position={"absolute"} />
      <Box position={"relative"}>
        <Box mt={"50px"}>
          <Heading textAlign={"center"}>Sign In</Heading>
          <br />
          <Box width={{ xl: "30%", lg: "30%", md: "30%", sm: "80%",base:"80%" }} m={"auto"} bgColor={"#ffffff4b"} p={"40px"} borderRadius={"20px"}>
            <Flex gap={"20px"} flexDirection={"column"} justify={"center"}>
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
              <Text as={"b"} color={"white"}>Login</Text>
            </Box>
            <br />
          </Box>
          <br />
          <br />
          <Box textAlign={"center"}><Text fontSize={"20px"} as={"b"}>Already have an account? <span style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/signup")}>Create Account</span>
          </Text></Box>
        </Box>

      </Box>
    </>
  )
}

export default Login
