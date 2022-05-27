import { foldl } from "../src/index";

describe("fold the array", () => {
    it("fold intergers", () => {
        expect(foldl([1, 2, 3, 4, 5], 0, (a, b) => a + b)).toBe(15);
    });
});