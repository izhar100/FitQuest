import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
