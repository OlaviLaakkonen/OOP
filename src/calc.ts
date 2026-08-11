
function sum(): void {
    const inputA: HTMLInputElement = document.getElementById("a") as HTMLInputElement
    const inputB: HTMLInputElement = document.getElementById("b") as HTMLInputElement
    
    const result: number = parseFloat(inputA.value) + Number(inputB.value)
    document.getElementById("result").innerHTML = result.toString()
}

export {}

window.sum = sum