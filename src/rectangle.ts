export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
const Width = 400
const Height = 200
const x = xCenter - (Width / 2)
const y = yCenter - (Height / 2)

ctx.fillStyle = "blue"
ctx.fillRect(xCenter, yCenter, Width, Height)
