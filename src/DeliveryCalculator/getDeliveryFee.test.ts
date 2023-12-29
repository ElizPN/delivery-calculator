

import { getDeliveryFee } from "./getDeliveryFee";

describe("getDeliveryFee", () => {

    // test("should return 0 when cart value is equel or more than 100", () => {
    //     expect(getDeliveryFee(100, 2000, 3)).toEqual(0)
    //     expect(getDeliveryFee(101, 2000, 3)).toEqual(0)
    // });

    // test("should return correct delivery", () => {
    //     expect(getDeliveryFee(15, 400, 9)).toEqual(3.50)
    //     expect(getDeliveryFee(8.1, 4000, 4)).toEqual(9.9)
    // });

    // test("should return 15 when delivery fee is more than 15", () => {
    //     expect(getDeliveryFee(6, 2001, 18)).toEqual(15)
    // });


    test("should return 0 when cart value is equel or more than 100", () => {
        expect(getDeliveryFee(15, 400, 9, "2015-03-27T15:00:00Z")).toEqual(4.2)
    });

});

