import axios from "axios";
import "./Singleworkout.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import { baseURL } from "../../../url";

const Singleworkout = () => {
  const [data, setdata] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(baseURL+`/workout/${id}`)
      .then((response) => {
        setdata(response.data[id]);
      });
  }, []);
  console.log(data);
  return (
    <div>
      {data?.map((it) => (
        <>
          <Details key={it._id} {...it} />
        </>
      ))}
    </div>
  );
};

export default Singleworkout;
