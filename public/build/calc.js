document.getElementById("+").addEventListener("click", (e) => {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = parseFloat(inputA.value) + Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("-").addEventListener("click", (e) => {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = parseFloat(inputA.value) - Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("*").addEventListener("click", (e) => {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = parseFloat(inputA.value) * Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
document.getElementById("/").addEventListener("click", (e) => {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const result = parseFloat(inputA.value) / Number(inputB.value);
    document.getElementById("result").innerHTML = result.toString();
});
export {};
//# sourceMappingURL=calc.js.map