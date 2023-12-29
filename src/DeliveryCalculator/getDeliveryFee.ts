import { getSurchargeForCartValue, getSurchargeForCartsCount, getSurchargeForDistance, getSurchargePickTime } from "./calculatorHelpers"



export function getDeliveryFee(cartValue: number, distance: number, cartsCount: number, time: string) {
    if (cartValue >= 100) {
        return 0
    }
    
    let deliveryFee = 0
    deliveryFee = getSurchargeForCartValue(cartValue)
    deliveryFee += getSurchargeForDistance(distance)
    deliveryFee += getSurchargeForCartsCount(cartsCount)
    deliveryFee = getSurchargePickTime(deliveryFee, time)

    if (deliveryFee > 15) {
        return 15
    }

    return deliveryFee
}