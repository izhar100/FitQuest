import axios from "axios";
import "./Singleworkout.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { baseURL } from "../../../url";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { BsSearch } from "react-icons/bs";
const Singleworkout = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  const [search,setSearch]=useState("")

  useEffect(() => {
    axios
      .get(baseURL+`/workout/${id}`)
      .then((response) => {
        setdata(response.data[id]);
      });
  }, []);
  console.log(data);
  const handleSearch=()=>{
     fetch(`https://fitquestbackend.onrender.com/workout/all?search=${search}`).then((res)=>res.json()).then((res)=>{
      setdata(res.all)
     }).catch((err)=>{
      console.log(err)
     })
  }
  return (
    <div>
      <br />
      <Flex width={"40%"} margin={"auto"} pr={"10px"} alignItems={"center"} gap={"10px"} border={"1px solid black"} borderRadius={"20px"}>
      <Input placeholder="Search workout here...!" border={"none"} borderRight={"1px solid black"} borderRadius={"none"} onChange={(e)=>setSearch(e.target.value)}/>
      <BsSearch size={"25px"} onClick={handleSearch}/>
      </Flex>
      <br />
      {data?.length>0?
      data.map((it,ind) => (
          <Details key={ind}  {...it} />
      )):<Box textAlign={"center"}> <Text as={"b"}>No result found for this {search} query</Text> </Box>
      }
    </div>
  );
};

export default Singleworkout;
