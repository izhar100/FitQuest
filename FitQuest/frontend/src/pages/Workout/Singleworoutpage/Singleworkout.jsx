import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Singleworkout = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://tame-jade-cape-buffalo-suit.cyclic.app/workout/${id}`)
      .then((response) => {
        setdata(response.data[id]);
      });
  }, [id]);
  return (
    <div>
      {data?.map((it) => (
        <div key={it._id}>{it.title}</div>
      ))}
    </div>
  );
};

export default Singleworkout;
