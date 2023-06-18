import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

export const PopoverForm = ({el,handleFlag}) => {
  const firstFieldRef = React.useRef(null);
  const [distance,setDistance] = useState(null);
  const [duration,setDuration] = useState(null);

  const handleSubmit = ()=>{

    console.log(el._id)
    const data = {
        ...el,
        distance: distance,
        duration: duration
    }

    fetch(`https://fitquestbackend.onrender.com/workout/dashboard/update/${el._id}`,{
        method:"PATCH",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(data)
      }).then((res)=>{
        return res.json()
      }).then((res)=>{
        console.log(res)
        alert("Updated successfully!!!")
        handleFlag()
      })
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="first-name">Distance</label>
      <br />
      <Input ref={firstFieldRef} defaultValue={el.distance} onChange={(e)=>setDistance(e.target.value)} type='text' variant='outline' placeholder='Distance' />
      <br />
      <label htmlFor="last-name">Duration</label>
      <br />
      <Input defaultValue={el.duration} onChange={(e)=>setDuration(e.target.value)} type='text' variant='outline' placeholder='Duration' />
      <br />
      <Button type='submit' marginTop={"5px"} colorScheme='teal' variant='outline'>
            Save
       </Button>
    </form>
  );
};