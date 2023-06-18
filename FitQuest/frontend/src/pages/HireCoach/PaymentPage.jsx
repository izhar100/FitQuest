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
} from '@chakra-ui/react';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [upiId, setUPIId] = useState('');

  const handlePayment = () => {
    // Perform payment processing logic based on the selected payment method and entered information
    console.log(`Payment submitted using ${paymentMethod}`);
  };

  return (
    <Box maxW="400px" mx="auto" p="20px">
      <Heading as="h1" size="xl" mb="20px">
        Secure Payment
      </Heading>

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
