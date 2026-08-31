export {}

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

export class rectangle {

    location: Point
    size: Size
    style: string

    constructor(x: number, y: number, width: number, height: number, style: string) {
        this.location = new Point(x, y)
        this.size = new Size(width, height)
        this.style = style
    }

    draw() {
        ctx.fillStyle = this.style
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }
}

export class circle {

    center: Point
    radius: number
    style: string

    constructor(x: number, y: number, radius: number, style: string) {
        this.center = new Point(x, y)
        this.radius = radius
        this.style = style
    }

    draw() {
        ctx.fillStyle = this.style
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
    }
}

class Point {

    x: number
    y: number

    constructor (x = 0, y = 0) {
        this.x = x
        this.y = y
    }

}

class Size {

    width: number
    height: number

    constructor (width = 0, height = 0) {
        this.width = width
        this.height = height
    }

}
