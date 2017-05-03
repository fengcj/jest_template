import sum from "../sum_es6";


test("adds two numbers", () => {
	expect(sum(1,4)).toBe(5);
});