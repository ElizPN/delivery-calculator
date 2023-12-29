export function getSurchargeForCartValue(cartValue: number) {
    if (cartValue > 10) {
        return 0
    }

    return 10 - cartValue

}


export function getSurchargeForDistance(distance: number) {
    if (distance <= 500) {
        return 1
    }

    let result = distance / 500

    return Math.ceil(result)
}


export function getSurchargeForCartsCount(cartsCount: number) {
    if (cartsCount < 5) {
        return 0
    }

    if (cartsCount >= 5 && cartsCount < 13) {
        return (cartsCount - 4) * 0.50
    }

    const firstFee = 8 * 0.50
    const secondFeee = (cartsCount - 12) * 1.20

    return firstFee + secondFeee
}


export function checkPickTime(timeISO: string) {

    const date = new Date(timeISO)
    const day = date.getDay()
    const hours = date.getHours()

    return day === 5 && (hours >= 15 && hours <= 19)

}


export const getSurchargePickTime = (deliveryFee: number, time: string) => checkPickTime(time) ? deliveryFee * 1.20 : deliveryFee

