const task1 = require("../src/task1");

test("Testing sum", () => {
    expect(task1.sum(1,2)).toBe(3);
});


test("Testing substraction", () => {
    expect(task1.sub(2,1)).toBe(1);
});


test("Testing multiplication", ()=> {
    expect(task1.mul(1,2)).toBe(2);
});


test("Testing division", () => {
    expect(task1.div(2,1)).toBe(2);
});

test("Testing division", () => {
    expect(task1.div(2,0)).toBe(undefined);
});
