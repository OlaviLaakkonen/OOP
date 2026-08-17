function calculate(calculator) {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = calculator(Number(inputA.value), Number(inputB.value));
    document.getElementById("result").innerHTML = result.toString();
}
function registerCalculator(id, calculator) {
    document.getElementById(id).addEventListener("click", () => {
        calculate(calculator);
    });
}
const calculators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a % b
}(Object.keys(calculators)).forEach(key => {
    registerCalculator(key, calculators[key]);
});
document.getElementById("calculate").addEventListener("click", () => {
    const select = document.getElementById("operation");
    const operation = select.value;
    calculate(calculators[operation]);
});
export {};
//# sourceMappingURL=calc.js.map