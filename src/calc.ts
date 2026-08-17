function calculate (calculator: (arg0: number, arg1: number) => number): void { 
    const inputA: HTMLInputElement = document.getElementById("a") as HTMLInputElement 
    const inputB: HTMLInputElement = document.getElementById("b") as HTMLInputElement

    const result: number = calculator (Number (inputA.value), Number(inputB.value))

    document.getElementById("result").innerHTML = result.toString()
}

function registerCalculator (id: string, calculator: (arg0: number, arg1: number) => number): void { 
    document.getElementById(id).addEventListener("click", (e: PointerEvent) => {
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

Object.keys(calculators).forEach((key: string) => registerCalculator(key, calculators [key]))


document.getElementById("calculate").addEventListener("click", (e: PointerEvent) => {
    const select: HTMLSelectElement = document.getElementById("operation") as HTMLSelectElement

    calculate(calculators[select.value])
})

export { }