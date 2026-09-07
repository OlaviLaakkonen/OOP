const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

export abstract class Shape {

    style: string
    
    constructor(style:string) {
        this.style = style
    }

    abstract draw(ctx: CanvasRenderingContext2D): void

    toString(): string {
        return `Shape with style ${this.style}`
    }
}

export class rectangle extends Shape {

    location: Point
    size: Size

    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    draw() {
        ctx.fillStyle = this.style
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

    toString(): string {
        return `Rectangle with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

export class circle extends Shape {

    center: Point
    radius: number

    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }

    draw() {
        ctx.fillStyle = this.style
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
    }

    toString(): string {
        return `Circle with location ${this.center}, radius ${this.radius}, ${super.toString()}`
    }
}

class Point {

    x: number
    y: number

    constructor (x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    // fixes location [object Object]
    toString(): string {
        return `(${this.x}, ${this.y})`
    }
}

class Size {

    width: number
    height: number

    constructor (width = 0, height = 0) {
        this.width = width
        this.height = height
    }

    // fixes size [object Object]
    toString(): string {
        return `${this.width} x ${this.height}`
    }

}
