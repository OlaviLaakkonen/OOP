type Calculator = (a: number, b: number) => number

function calculate(calculator: Calculator): void {
    const inputA = document.getElementById("a") as HTMLInputElement
    const inputB = document.getElementById("b") as HTMLInputElement
    const result = calculator(Number(inputA.value), Number(inputB.value))

    document.getElementById("result")!.innerHTML = result.toString()
}

function registerCalculator(id: string, calculator: Calculator): void {
    document.getElementById(id)!.addEventListener("click", () => {
        calculate(calculator)
    })
}

const calculators = {
    "+": (a: number, b: number): number => a + b, 
    "-": (a: number, b: number): number => a - b, 
    "*": (a: number, b: number): number => a * b, 
    "/": (a: number, b: number): number => a / b, 
    "%": (a: number, b: number): number => a % b
}

(Object.keys(calculators) as Array<keyof typeof calculators>).forEach(key => {
    registerCalculator(key, calculators[key])
})

document.getElementById("calculate")!.addEventListener("click", () => {
    const select = document.getElementById("operation") as HTMLSelectElement
    const operation = select.value as keyof typeof calculators

    calculate(calculators[operation])
})

export {}