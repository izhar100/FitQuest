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
import { Button } from "@chakra-ui/react";
import { calcLength } from "framer-motion";
const Singleworkout = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [ser, setser] = useState("");
  const [page, setPage] = useState(1);
  console.log(ser);
  useEffect(() => {
    axios.get(baseURL + `/workout/${id}`).then((response) => {
      setdata(response.data[id]);
    });
  }, [page]);

  const handleSearch = () => {
    fetch(`https://fitquestbackend.onrender.com/workout/all?search=${search}`)
      .then((res) => res.json())
      .then((res) => {
        setdata(res.all);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <br />
      <Flex
        width={"40%"}
        margin={"auto"}
        pr={"10px"}
        alignItems={"center"}
        gap={"10px"}
        border={"1px solid black"}
        borderRadius={"20px"}>
        <Input
          placeholder="Search workout here...!"
          border={"none"}
          borderRight={"1px solid black"}
          borderRadius={"none"}
          onChange={(e) => {
            setSearch(e.target.value);
            setser(e.target.value);
          }}
        />
        <BsSearch size={"25px"} onClick={handleSearch} />
      </Flex>
      <br />
      {data?.length > 0 ? (
        data
          .slice(page * 4 - 4, page * 4)
          .filter((it) => it.title.toLowerCase().includes(ser.toLowerCase()))
          .map((it, ind) => <Details key={ind} {...it} />)
      ) : (
        <Box textAlign={"center"}>
          {" "}
          <Text as={"b"}>No result found for this {search} query</Text>{" "}
        </Box>
      )}
      {data?.length < 5 ? (
        ""
      ) : (
        <Flex>
          <Flex
            margin={"auto"}
            display={"block"}
            alignItems={"center"}
            marginTop={"1rem"}>
            <Button
              bgColor="rgb(224, 246, 243)"
              size="md"
              onClick={() => setPage((prev) => prev - 1)}
              isDisabled={page === 1}>
              Prev
            </Button>
            <Button bgColor="rgb(224, 246, 243)" size="md">
              {page}
            </Button>
            <Button
              bgColor="rgb(224, 246, 243)"
              size="md"
              onClick={() => setPage((prev) => prev + 1)}
              isDisabled={page == Math.ceil(data?.length / 4)}>
              Next
            </Button>
          </Flex>
        </Flex>
      )}
    </div>
  );
};
//isDisabled={Math.ceil(data.length / 5)}
export default Singleworkout;
