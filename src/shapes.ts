const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

export interface Shape {

    draw(ctx: CanvasRenderingContext2D): void

    toString(): string

}

export abstract class BaseShape implements Shape {

    private style: string

    constructor(style: string) {
        this.style = style
    }

    public abstract draw(ctx: CanvasRenderingContext2D): void

    public toString(): string {
        return `Shape with style ${this.style}`
    }

    public getStyle(): string {
        return this.style
    }
}

export class rectangle extends BaseShape {

    private location: Point
    private size: Size

    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.getStyle()
        ctx.fillRect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

    public toString(): string {
        return `Rectangle with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

export class circle extends BaseShape {

    private center: Point
    private radius: number

    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.getStyle()
        ctx.beginPath()
        ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    public toString(): string {
        return `Circle with location ${this.center}, radius ${this.radius}, ${super.toString()}`
    }
}

export class Point {

    private _x: number
    private _y: number

    constructor(x = 0, y = 0) {
        this._x = x
        this._y = y
    }

    public get x(): number {
        return this._x
    }

    public get y(): number {
        return this._y
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }
}

export class Size {

    private _width: number
    private _height: number

    constructor(width = 0, height = 0) {
        this._width = width
        this._height = height
    }

    public get width(): number {
        return this._width
    }

    public get height(): number {
        return this._height
    }

    public toString(): string {
        return `${this.width} x ${this.height}`
    }
}
