import { Box, Button, Flex, FormLabel, Heading, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/authReducer/action'
import { useToast } from '@chakra-ui/react'
const Login = () => {
  const {user}=useSelector((store)=>{
    return {
      user:store.authReducer.user
    }
  })
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const toast=useToast()

  // useEffect(()=>{
  //   if(user.email){
  //     console.log(user.email)
  //     // if(user.email=="admin@gmail.com"){
  //     //   navigate("/admin")
  //     // }else{
  //     //   navigate("/")
  //     // }
  //   }
  // },[user])

  const handleForm = () => {
    if(email==""||password==""){
      toast({
        title: 'Please enter email or password',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        position:'top'
    })

    }else{
      const loginData = {
        email,
        password
      }
      dispatch(login(loginData))
      
    }
  }

  return (
    <>
      <Image src='https://img.freepik.com/free-vector/guy-lifting-barbell-young-man-sportswear-cartoon-character-weightlifting-bodybuilder-working-out-with-dumbbell-muscle-training-physical-exercise-fitness-workout_575670-2151.jpg?w=996&t=st=1686829099~exp=1686829699~hmac=9fc8ab279e20096a6d75ed5ec80f1566b53b8b6f669c10f3ca06a5520e751056' width={"100%"} height={"100vh"} position={"absolute"} />
      <Box position={"relative"}>
        <Box bgColor={"#0f0f0f69"} height={"100vh"}>
          <br />
          <Heading textAlign={"center"} color={"#ffffff"}>Sign In</Heading>
          <br />
          <Box width={{ xl: "30%", lg: "30%", md: "30%", sm: "80%",base:"80%" }} m={"auto"} bgColor={"#ffffff64"} p={"40px"} borderRadius={"20px"}>
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
          <Box textAlign={"center"}><Text fontSize={"20px"} as={"b"} color={"white"}>Already have an account? <span style={{color:"#d0ff00",cursor:"pointer",fontSize:"20px"}} onClick={()=>navigate("/signup")}>Create Account</span>
          </Text></Box>
        </Box>

      </Box>
    </>
  )
}

export default Login
