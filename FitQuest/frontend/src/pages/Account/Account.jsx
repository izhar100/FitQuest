import { Box, Button, Divider, Flex, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { logOut } from '../../redux/authReducer/action'
import { useNavigate } from 'react-router-dom'
const Account = () => {
  const { user,isAuth } = useSelector((store) => {
    return {
      user: store.authReducer.user,
      isAuth:store.authReducer.isAuth
    }
  })
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [age, setAge] = useState(0)
  const [location, setlocation] = useState("")
  const [email, setemail] = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    if (user) {
      let users=user
      setfirstName(users.firstName)
      setlastName(users.lastName)
      setemail(users.email)
      setAge(users.age)
      setlocation(users.location)
    }
  //   if(!isAuth){
  //     navigate("/login")
  //  }
  }, [])

  const LogOut=()=>{
    dispatch(logOut)
    navigate("/")
  }

  return (
    <Box width={"80%"} bgColor={"#add0ff"} m={"auto"} mt={"50px"} mb={"50px"} borderRadius={"20px"} p={"20px"}>
      <Flex justifyContent={"center"}>
        <AvatarGroup spacing='1rem' margin={"auto"}>
          <Avatar bg='teal.500' w={"60px"} h={"60px"} />
        </AvatarGroup>
      </Flex>
      <Text textAlign={"center"} color={"blue"} fontWeight={"600"}>Level 1</Text>
      <Box textAlign={"center"}><Button bgColor={"#004cff"} _hover={{backgroundColor:"#004cff"}} color={"white"} onClick={LogOut}>Logout</Button></Box>
      <hr/>
      <Box m={"auto"} p={"20px"} borderRadius={"20px"}>
        <Flex gap={"80px"} justifyContent={"center"}>
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
        <Flex gap={"80px"} justify={"center"}>
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
        <Flex gap={"80px"} justify={"center"}>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='email' value={email} onChange={(e) => setemail(e.target.value)} />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='password' value={"ezhar"}/>
          </Box>
        </Flex>
        <br />
        <Box textAlign={"center"}><Button bgColor={"#004cff"} _hover={{backgroundColor:"#004cff"}} color={"white"}>Edit Account Details</Button></Box>
      </Box>
    </Box>
  )
}

export default Account
