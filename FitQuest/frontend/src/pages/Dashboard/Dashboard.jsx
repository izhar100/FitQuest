// import React from 'react';
import cycling from "./Images/cycling.jpg";
import './Dashboard.css';
import { Button,Text } from '@chakra-ui/react'

const Dashboard = () => {

  return (
    <div className="dashboard">
      <div style={{height:"100vh"}}>
        <img src={cycling} alt="" className="background-image" />
      </div>
      <div className="image-overlay">
        <h1 className="text-over-image">Discover the power within you to overcome challenges, embrace victories, and inspire others through your athletic journey</h1>
        <Button className="join-now" colorScheme="orange" variant='outline'>
          Join Now
        </Button>
      </div>
      <div className="details" >
      <Text fontSize='5xl'>How Does FitQuest Help Me?</Text>
        <Text></Text>
        <h3>GET YOUR VERY OWN PERSONAL TRAINER THAT PROVIDES EVERYTHING YOU NEED TO GET IN THE BEST SHAPE OF YOUR LIFE.</h3>
      </div>
    </div>
  );
};

export default Dashboard;
