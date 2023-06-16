import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { CheckIcon,DeleteIcon,EditIcon } from '@chakra-ui/icons'


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
            </Flex>
            <Button m={5} colorScheme='green' variant='outline'>
                    <CheckIcon/>
            </Button>
            <Button m={5} colorScheme='yellow' variant='outline'>
                <EditIcon/>
            </Button>
            <Button m={5} colorScheme='red' variant='outline'>
                <DeleteIcon/>
            </Button>
          </Box>
        </Flex>
    </Box>
  )
}

export default DashboardCard;