import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { getDeliveryFee } from './getDeliveryFee';





export function DeliveryCalculator() {
    const [cartValue, setCartValue] = useState(0)
    const [distance, setDistance] = useState(0)
    const [cartsCount, setCartsCount] = useState(0)
    const [deliveryFee, setDeliveryFee] = useState(0)

    function onclickHandler() {
        const deliveryFee = getDeliveryFee(cartValue, distance, cartsCount)
        setDeliveryFee(deliveryFee)
    }


    return <Box>
        <TextField
            onChange={(event) => setCartValue(Number(event.target.value))}
            required
            id="outlined-required"
            label="Cart Value"
        />
        <TextField
            onChange={(event) => setDistance(Number(event.target.value))}
            required
            id="outlined-required"
            label="Distance"
        />
        <TextField
            onChange={(event) => setCartsCount(Number(event.target.value))}
            required
            id="outlined-required"
            label="Carts Count"
        />

        <Button variant="contained"
            onClick={onclickHandler}>
            Count Delivery Fee
        </Button>

        <Box>{deliveryFee}</Box>
    </Box>

}