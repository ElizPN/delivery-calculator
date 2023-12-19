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
    result = Math.ceil(result)

    return result
}


export function getSurchargeForCartsCount(cartsCount: number) {
    if (cartsCount < 5) {
        return 0
    }
    if (cartsCount >= 5 && cartsCount < 13) {
        const result = (cartsCount - 4) * 0.50
        return result
    }
    const firstFee = 8 * 0.50
    const secondFeee = (cartsCount - 12) * 1.20
    const result = firstFee + secondFeee
    return result


}