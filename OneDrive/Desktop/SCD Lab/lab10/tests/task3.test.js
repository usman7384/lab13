const task3 = require("../src/task3");

test("Testing Exponent", () => {
    expect(task3.power(2,2)).toBe(4);
});

test("Testing round", () => {
    expect(task3.round(2.7)).toBe(3);
});

test("Testing ceiling", () => {
    expect(task3.ceiling(2.3)).toBe(3);
});