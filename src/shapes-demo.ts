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

const circle = {
    x: xCenter - 20,
    y: yCenter - 0,
    radius1: 70,
    radius2: 0
}

ctx.fillStyle = "#006A4E"
ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)

ctx.fillStyle = "#DA291C"
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius1, circle.radius2, circle.radius1 * Math.PI)
ctx.fill();