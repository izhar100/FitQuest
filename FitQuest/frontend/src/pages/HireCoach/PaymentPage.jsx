import React, { useState } from 'react';
import {
  Box,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [upiId, setUPIId] = useState('');
  const toast=useToast()
  const navigate=useNavigate()

  const handlePayment = () => {
    // Perform payment processing logic based on the selected payment method and entered information
    if(paymentMethod=="creditCard"){
      if(!cardName || !cardNumber || !expiryDate || !cvv){
        toast({
          title: 'Please fill all details',
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
      }else{
        toast({
          title: 'Payment Success!!! we will connect you within 24 hours',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
        navigate("/")
        
      }
    }
    if(paymentMethod=="upi"){
      if(!upiId){
        toast({
          title: 'Please enter upi id',
          status: 'warning',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
      }else{
        toast({
          title: 'Payment Success!!! we will connect you within 24 hours',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position:'top'
        })
        navigate("/")
      }
    }
  };

  return (
    <Box maxW="400px" mx="auto" p="20px">
      <Heading as="h1" size="xl" mb="20px">
        Secure Payment
      </Heading>
      <Flex justifyContent={"space-between"}>
      <Text>Payable Amount:</Text>
      <Text as={"b"}>₹{localStorage.getItem("amount")}.00</Text>
      </Flex>
      <FormControl as="fieldset" mb="20px">
        <FormLabel as="legend">Select Payment Method</FormLabel>
        <RadioGroup defaultValue="creditCard" onChange={setPaymentMethod}>
          <Stack spacing={3}>
            <Radio value="creditCard">Credit Card</Radio>
            <Radio value="upi">UPI</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {paymentMethod === 'creditCard' && (
        <Box bg="#f9f9f9" p="20px" borderRadius="8px">
          <FormControl mb="10px">
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </FormControl>

          <FormControl mb="10px">
            <FormLabel>Cardholder Name</FormLabel>
            <Input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </FormControl>

          <FormControl mb="10px">
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </FormControl>

          <FormControl mb="10px">
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </FormControl>
        </Box>
      )}

      {paymentMethod === 'upi' && (
        <Box bg="#f9f9f9" p="20px" borderRadius="8px">
          <FormControl mb="10px">
            <FormLabel>UPI ID</FormLabel>
            <Input
              type="text"
              value={upiId}
              onChange={(e) => setUPIId(e.target.value)}
            />
          </FormControl>
        </Box>
      )}

      <Button colorScheme="blue" onClick={handlePayment} mt="20px">
        Pay Now
      </Button>
    </Box>
  );
};

export default PaymentPage;
