function sum() {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = parseFloat(inputA.value) + Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
}
window.sum = sum;
export {};
//# sourceMappingURL=calc.js.map