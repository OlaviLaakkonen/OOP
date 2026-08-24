export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
 
const rectangle = {
    x: xCenter - 200,
    y: yCenter - 100,
    width: 400,
    height: 200
}

ctx.fillStyle = "green"
ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
