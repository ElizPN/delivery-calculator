
import { getSurchargeForCartValue } from './calculatorHelpers';

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