import React, { useEffect } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const navigate = useNavigate()
  useEffect(()=>{
    console.log(window.location.href)
  },[])
  return (
    <>
      <Box bgColor={"#fdfdfd"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}>
        <Flex p={"10px"}>
          <Flex width={"40%"}>
            <Image src={logo} width={"200px"} onClick={()=>navigate("/")}/>
          </Flex>
          <Flex width={'60%'} justifyContent={"space-between"} alignItems={"center"} display={{ xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}>
            <Text as={"b"} onClick={() => navigate("/")} _hover={{cursor:"pointer"}}>Dashboard</Text>
            <Text as={"b"} onClick={() => navigate("/workout")} _hover={{cursor:"pointer"}}>Workout</Text>
            <Text as={"b"} onClick={() => navigate("/progress")} _hover={{cursor:"pointer"}}>Progress</Text>
            <Text as={"b"} onClick={() => navigate("/completed")} _hover={{cursor:"pointer"}}>Completed</Text>
            <Text as={"b"} onClick={() => navigate("/coach")} _hover={{cursor:"pointer"}}>Hire</Text>
            <Text as={"b"} onClick={() => navigate("/content")} _hover={{cursor:"pointer"}}>Content</Text>
            <Text as={"b"} onClick={() => navigate("/account")} _hover={{cursor:"pointer"}}>Account</Text>
          </Flex>
          <Flex width={'60%'} display={{ xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }} justifyContent={"right"} alignItems={"center"}>
          <HamburgerIcon _hover={{cursor:"pointer"}} onClick={onOpen}/>
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <br />
          <br />
          <DrawerBody>
            <Text as={"b"} onClick={() => navigate("/")} _hover={{cursor:"pointer"}}>Dashboard</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/workout")} _hover={{cursor:"pointer"}}>Workout</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/progress")} _hover={{cursor:"pointer"}}>Progress</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/completed")} _hover={{cursor:"pointer"}}>Completed</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/coach")} _hover={{cursor:"pointer"}}>Hire</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/content")} _hover={{cursor:"pointer"}}>Content</Text>
            <br />
            <hr />
            <Text as={"b"} onClick={() => navigate("/account")} _hover={{cursor:"pointer"}}>Account</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
