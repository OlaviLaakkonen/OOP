export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2
 
const rectangle1 = {
    x: xCenter - 200,
    y: yCenter - 100,
    width: 500,
    height: 350
}

const rectangle2 = {
    x: xCenter - 120,
    y: yCenter - 25,
    width: 350,
    height: 200
}

const rectangle3 = {
    x: xCenter - 120,
    y: yCenter - -55,
    width: 350,
    height: 50
}

const rectangle4 = {
    x: xCenter - 20,
    y: yCenter - 25,
    width: 50,
    height: 200
}

ctx.fillStyle = "#002F6C"
ctx.fillRect(rectangle1.x, rectangle1.y, rectangle1.width, rectangle1.height)

ctx.fillStyle = "white"
ctx.fillRect(rectangle2.x, rectangle2.y, rectangle2.width, rectangle2.height)

ctx.fillStyle = "#002F6C"
ctx.fillRect(rectangle3.x, rectangle3.y, rectangle3.width, rectangle3.height)

ctx.fillStyle = "#002F6C"
ctx.fillRect(rectangle4.x, rectangle4.y, rectangle4.width, rectangle4.height)