import axios from "axios";
import "./Singleworkout.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";

const Singleworkout = () => {
  const [data, setdata] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://tame-jade-cape-buffalo-suit.cyclic.app/workout/${id}`)
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
