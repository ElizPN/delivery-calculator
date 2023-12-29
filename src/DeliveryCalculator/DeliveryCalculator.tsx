import { Box, Button, Card, Chip, Container, TextField } from '@mui/material';
import { useState } from 'react';
import { getDeliveryFee } from './getDeliveryFee';
import { CardHeader } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';





export function DeliveryCalculator() {
    const [cartValue, setCartValue] = useState(0)
    const [distance, setDistance] = useState(0)
    const [cartsCount, setCartsCount] = useState(0)
    const [deliveryTime, setdDeliveryTime] = useState("")
    const [deliveryFee, setDeliveryFee] = useState(0)

    function onclickHandler() {
        const deliveryFee = getDeliveryFee(cartValue, distance, cartsCount, deliveryTime)
        setDeliveryFee(deliveryFee)
    }


    return <Container>
        <Card variant="outlined" sx={{ display: "flex", justifyContent: "space-around", height: "500px", width: "50%", flexDirection: "column" }}>
            <CardHeader title="Delivery calculator" />
            <Box>
                <TextField
                    onChange={(event) => setCartValue(Number(event.target.value))}
                    required
                    type='number'
                    id="outlined-required"
                    label="Cart Value"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}

                />
            </Box>
            <Box>
                <TextField
                    onChange={(event) => setDistance(Number(event.target.value))}
                    required
                    type='number'
                    id="outlined-required"
                    label="Distance"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                />
            </Box>
            <Box>
                <TextField
                    type='number'
                    onChange={(event) => setCartsCount(Number(event.target.value))}
                    required
                    id="outlined-required"
                    label="Carts Count"
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                />
            </Box>
            <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker label="Basic date time picker" />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>

            <Button variant="contained"
                onClick={onclickHandler}>
                Count Delivery Fee
            </Button>

            <Box><Chip label={deliveryFee} variant="outlined" /></Box>
        </Card>
    </Container >

}