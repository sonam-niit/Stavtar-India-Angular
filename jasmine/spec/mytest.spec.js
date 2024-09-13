class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }
    sub(num1, num2) {
        return num1 - num2;
    }
}

describe("Checking my Calculator functions", function () {
    beforeEach(()=>{
        console.log("Before Each");
    })
    afterEach(()=>{
        console.log("After Each");
    })
    beforeAll(()=>{
        console.log("Before All Test");
    })
    afterAll(()=>{
        console.log("After All Test");
    })
    it("check Addition", function () {
        calc = new Calculator();
        expect(10).toBe(calc.add(7,3));
        console.log("Addition Test Done");
    });
    it("check Subtraction", function () {
        calc = new Calculator();
        expect(4).toBe(calc.sub(7,3));
        console.log("Sub Test Done");
    });
});