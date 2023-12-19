
import { getSurchargeForCartValue, getSurchargeForDistance, getSurchargeForCartsCount } from './calculatorHelpers';

describe("getSurchargeForLowCartValue", () => {

    test("should return 0 when cart value more than 10", () => {
        const result = getSurchargeForCartValue(12)
        expect(result).toEqual(0)
    });

    test("should return difference whwn cart value less than 10", () => {
        const result = getSurchargeForCartValue(8)
        expect(result).toEqual(2)
    });
});


describe("getSurchargeForDistance", () => {

    test("should return 1 when distance between 0 and 500", () => {
        const result = getSurchargeForDistance(500)
        expect(result).toEqual(1)
    });

    test("should return 2 when distance between 501 and 1000", () => {
        const result = getSurchargeForDistance(501)
        expect(result).toEqual(2)
    });

    test("should return 2 also when distance between 501 and 1000", () => {
        const result = getSurchargeForDistance(999)
        expect(result).toEqual(2)
    });

    test("should return 3 when distance between 1001 and 1500", () => {

        expect(getSurchargeForDistance(1001)).toEqual(3)
        expect(getSurchargeForDistance(1500)).toEqual(3)
    });

    test("should return 4 when distance between 1500 and 2000", () => {

        expect(getSurchargeForDistance(1501)).toEqual(4)
        expect(getSurchargeForDistance(2000)).toEqual(4)
    });

    test("should return 5 when distance between 2001 and 2500", () => {
        expect(getSurchargeForDistance(2001)).toEqual(5)
    });

});


describe("getSurchargeForCartsCount", () => {

    test("should return 0 when carts count is 4", () => {
        expect(getSurchargeForCartsCount(4)).toEqual(0)
    });

    test("should return 0.50 when carts count is 5", () => {
        expect(getSurchargeForCartsCount(5)).toEqual(0.50)
    });

    test("should return 2.50 when carts count is 9", () => {
        expect(getSurchargeForCartsCount(9)).toEqual(2.50)
    });

    test("should return 4 when carts count is 12", () => {
        expect(getSurchargeForCartsCount(12)).toEqual(4)
    });

    test("should return 5.20 when carts count is 13", () => {
        expect(getSurchargeForCartsCount(13)).toEqual(5.20)
    });

    test("should return 13.60 when carts count is 20", () => {
        expect(getSurchargeForCartsCount(20)).toEqual(13.60)
    });


});