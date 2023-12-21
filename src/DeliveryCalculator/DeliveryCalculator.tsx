import { Box, Button, Card, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { getDeliveryFee } from './getDeliveryFee';
import { CardHeader } from '@mui/material';





export function DeliveryCalculator() {
    const [cartValue, setCartValue] = useState(0)
    const [distance, setDistance] = useState(0)
    const [cartsCount, setCartsCount] = useState(0)
    const [deliveryFee, setDeliveryFee] = useState(0)

    function onclickHandler() {
        const deliveryFee = getDeliveryFee(cartValue, distance, cartsCount)
        setDeliveryFee(deliveryFee)
    }


    return <Container>
        <Card variant="outlined" sx={{ display: "flex", justifyContent: "space-around", height: "500px", width: "50%", flexDirection: "column" }}>
            <CardHeader></CardHeader>
            <Typography variant="h5">
                Delivery calcilator
            </Typography>
            <Box>
                <TextField
                    onChange={(event) => setCartValue(Number(event.target.value))}
                    required
                    id="outlined-required"
                    label="Cart Value"

                />
            </Box>
            <Box>
                <TextField
                    onChange={(event) => setDistance(Number(event.target.value))}
                    required
                    id="outlined-required"
                    label="Distance"
                />
            </Box>
            <Box>
                <TextField
                    type='number'
                    onChange={(event) => setCartsCount(Number(event.target.value))}
                    required
                    id="outlined-required"
                    label="Carts Count"
                />
            </Box>

            <Button variant="contained"
                onClick={onclickHandler}>
                Count Delivery Fee
            </Button>

            <Box>{deliveryFee}</Box>
        </Card>
    </Container >

}