import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';


const cyclingImage="https://classroomclipart.com/image/static2/preview2/cycling-workout-riding-bicycle-clipart-27118.jpg"

const walkingImage="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55754/person-walking-emoji-clipart-md.png"
const runningImage="https://static.vecteezy.com/system/resources/previews/004/246/017/original/a-man-is-running-in-a-race-clip-art-icon-illustration-vector.jpg";


const DashboardCard = (el) => {
    const navigate=useNavigate()
  return (
    <Box mt={"40px"}>
        <Flex gap={"20px"} onClick={()=>navigate("/")} bgColor={"#d7ffff"} p={"20px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.15) 0px 2px 8px"}>
          <Box w={"100px"} h={"100px"} bgColor={"white"}   borderRadius={"10px"}>
           <Image src={el.type=="walking"?walkingImage:el.type=="running"?runningImage:cyclingImage} w={"100%"} h={"100%"} borderRadius={"10px"}/>
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
                <button>Complete</button>
                <Box style={{color:"white",backgroundColor:"lightgreen",borderRadius:"10px",width:"70px"}} ><Text style={{color:"green",paddingTop:"5px"}}>complete</Text></Box>
                {/* <Box style={{color:"white",backgroundColor:"red",borderRadius:"10px"}} ><Text style={{color:"darkred",paddingTop:"5px"}}>
                    <DeleteIcon />
                </Text></Box> */}
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}

export default DashboardCard;