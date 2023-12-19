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

getSurchargeForDistance(1001)