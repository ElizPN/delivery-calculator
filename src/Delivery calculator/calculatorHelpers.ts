export function getSurchargeForLowCartValue(cartValue: number) {
    if (cartValue > 10) {
        return 0
    }
    return 10 - cartValue

}