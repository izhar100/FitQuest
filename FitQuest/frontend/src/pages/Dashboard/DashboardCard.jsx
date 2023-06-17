import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { CheckIcon,DeleteIcon,EditIcon } from '@chakra-ui/icons';
import cyclingImage from "./Images1/cycling.png";
import walkingImage from "./Images1/walk.png"
import runningImage from "./Images1/running.png";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteData } from '../../redux/DeshboardRdeucer/action';


const DashboardCard = ({el,handleFlag}) => {
    const navigate=useNavigate();
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
      console.log(count);
    },[count])

    const handleDelete = (id) =>{

      dispatch(deleteData(id))

      // setCount(count+1)
      // fetch(`https://fitquestbackend.onrender.com/workout/dashboard/delete/${id}`,{
      //   method:"Delete",
      //   headers:{
      //     'Content-Type':'application/json',
      //     Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0OGMwODhiMGJlN2Q0YTIzMzQzYTZlZSIsImZpcnN0TmFtZSI6InNhZ2FyIiwibGFzdE5hbWUiOiJkZXN3YWwiLCJlbWFpbCI6InNhZ2FyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDA1JEFnSENYOFVrY1BUaTM5MHRpR3hJSU9SQ3JQVWY3S2VLUC40MGhzdWVuYnNHL1dkY3cxQ05PIiwibG9jYXRpb24iOiJSb2h0YWsiLCJhZ2UiOjI1fSwiaWF0IjoxNjg3MDAwNjIxfQ.wR3qiftqDRTYziDh_1saMLvltHD4g2nSZgT0ecMdBxI`
      //   }
      // }).then((res)=>{
      //   return res.json()
      // }).then(()=>alert("Deleted successfully!!!"))
    }
    const handleComplete = (id)=>{

      const data = {
        ...el,
        isCompleted:true,
      }

      fetch(`https://fitquestbackend.onrender.com/workout/dashboard/update/${id}`,{
        method:"PATCH",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      }).then((res)=>{
        return res.json()
      }).then(()=>{
        alert("Updated successfully!!!")
        handleFlag()
      })
    }

  return (
    <Box mt={"40px"}>
        <Flex gap={"20px"} onClick={()=>navigate("/")} bgColor={el.isCompleted?"#d7ffff":"#fffbb3"} p={"20px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 8px"}>
          <Box w={"100px"} h={"100px"}   borderRadius={"10px"}>
            {/* {el.type === "walking" && <Image src={walkingImage} w={"100%"} h={"100%"} borderRadius={"10px"}/>}
            {el.type === "cycling" && <Image src={cyclingImage} w={"100%"} h={"100%"} borderRadius={"10px"}/>}
            {el.type === "running" && <Image src={runningImage} w={"100%"} h={"100%"} borderRadius={"10px"}/>} */}
           <Image src={el.type==="walking"?walkingImage:el.type=="running"?runningImage:cyclingImage} w={"100%"} h={"100%"} borderRadius={"10px"}/>
          </Box>
          <Box  w={"90%"} pt={"5px"} pl={"20px"}>
            <Box>
                <Text fontSize={"20px"} as={"b"}>{el.title}...!</Text>
            </Box>
            <Flex gap={"20px"} mt={"20px"}>
                {/* <Flex alignItems={"center"} gap={"5px"}> <Text><AiFillTag/></Text><Text>{el.type}</Text></Flex> */}
                <Text color={"blue"} >Type: {el.type}</Text>
                <Text color={"red"} >Distance: {el.distance}km</Text>
                <Text color={"green"}>Duration: {el.duration}min</Text>
                <Text color={"blueviolet"} >Speed: {el.speed}</Text>
            </Flex>
            {!el.isCompleted && <Button onClick={()=>handleComplete(el._id)}  m={5} colorScheme='green' variant='outline'>
                    <CheckIcon/>
            </Button>}
            {!el.isCompleted && <Button m={5} colorScheme='yellow' variant='outline'>
                <EditIcon/>
            </Button>}
            <Button m={5} onClick={()=>handleDelete(el._id)} colorScheme='red' variant='outline'>
                <DeleteIcon/>
            </Button>
            {el.isCompleted && <Button m={5} colorScheme='green' variant='outline'>
                Completed
            </Button>}

          </Box>
        </Flex>
    </Box>
  )
}

export default DashboardCard;