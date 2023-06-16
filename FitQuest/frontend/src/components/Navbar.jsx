
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Box bgColor={"#fdfdfd"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}>
      <Flex p={"10px"}>
        <Flex width={"40%"}>
          <Image src={logo} width={"200px"} />
        </Flex>
        <Flex width={'60%'} justifyContent={"space-between"} alignItems={"center"}>
        <Text  as={"b"} onClick={()=>navigate("/")}>Dashboard</Text>
        <Text  as={"b"} onClick={()=>navigate("/workout")}>Workout</Text>
        <Text  as={"b"} onClick={()=>navigate("/progress")}>Progress</Text>
        <Text  as={"b"} onClick={()=>navigate("/completed")}>Completed</Text>
        <Text as={"b"} onClick={()=>navigate("/coach")}>Hire</Text>
        <Text as={"b"} onClick={()=>navigate("/content")}>Content</Text>
        <Text as={"b"} onClick={()=>navigate("/account")}>Account</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
