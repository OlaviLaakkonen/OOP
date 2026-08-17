export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
 
const rectangle = {
    Width: 400,
    Height: 200,
    x: xCenter - 200,
    y: yCenter - 100
}
drawRectangle(rectangle, "blue")

const rectangle2 = {
    Width: 200,
    Height: 100,
    x: xCenter - 20,
    y: yCenter - 25
}
drawRectangle(rectangle2, "white")

function drawRectangle(rectangle: { Width: number; Height: number; x: number; y: number }, style: string) {
    ctx.fillStyle = style
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.Width, rectangle.Height);
}