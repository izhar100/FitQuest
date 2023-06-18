import axios from "axios";
import { baseURL } from "../../../url";
import { useToast } from "@chakra-ui/toast";

// eslint-disable-next-line react/prop-types
const Details = (props) => {
  const { _id, title, type, distance, duration, image } = props;
  const toast=useToast()
  const handleadd = () => {
    const data={
      ...props,
      isCompleted:false
    }
    // axios
    //   .post(
    //     baseURL+"/workout/dashboard/add",
    //     props
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });
    fetch(baseURL+"/workout/dashboard/add",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json()).then((res)=>{
      console.log(res)
      toast({
        title: `${res.msg}`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:'top'
    })
    }).catch((err)=>{
      console.log(err)
      toast({
        title: `${err.message}`,
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:'top'
    })
    })
  };
  return (
    <>
    <div className="main">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <br />
        <div>
          <span className="title">{title}...!</span>
          <span style={{ display: "flex", gap: "1rem" }}>
            <span className="type">Type : {type}</span>
            <span className="distance">Distance : {distance}km</span>
            <span className="duration">Duration : {duration}min</span>
          </span>
          <span
            onClick={() => handleadd()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <span
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "2px 10px",
                width: "5rem",
                borderRadius: "5px",
                marginTop: "1rem",
              }}>
              Start
            </span>
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Details;
