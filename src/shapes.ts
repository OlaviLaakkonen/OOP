const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

/**
 * Represents a shape that can be drawn on a 2D canvas.
 */
export interface Shape {

    readonly path: Path2D

    /**
     * Draws the shape on the specified canvas context.
     * 
     * @param ctx the canvas rendering context used to draw the shape.
     */
    draw(ctx: CanvasRenderingContext2D): void

    drawSelectionBorder(ctx: CanvasRenderingContext2D): void

    /**
     * @returns a string representation of the shape.
     */
    toString(): string

}

/**
 * Provides a base implementation for shapes that have a style.
 */
export abstract class BaseShape implements Shape {

    public static initWithXY(x: number, y: number): Shape {
        throw Error("Impliment this method")
    }

    // The style used to draw the shape.
    private style: string

    /**
     * Constructs and initializes a BaseShape with the specified style.
     * 
     * @param style the style used to draw the shape.
     */
    constructor(style: string) {
        this.style = style
    }

    /**
     * Draws the shape on the specified canvas context.
     * This method must be implemented by subclasses.
     * 
     * @param ctx the canvas rendering context used to draw the shape.
     */
    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = this.style
        ctx.fill(this.path)
    }

    public drawSelectionBorder(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.stroke(this.path)
    }

    public get path(): Path2D {
        const path: Path2D = new Path2D()

        this.setupPath(path)

        return path
    }

    protected abstract setupPath(path: Path2D): void

    /**
     * @returns a string containing the shape style.
     */
    public toString(): string {
        return `Shape with style ${this.style}`
    }

    /**
     * Gets the style used to draw the shape.
     * 
     * @returns the style of the shape.
     */
    public getStyle(): string {
        return this.style
    }
}

/**
 * Represents a rectangle that can be drawn on a 2D canvas.
 */
export class rectangle extends BaseShape {

    public static initWithXY(x: number, y: number) {
        return new rectangle(x, y, 150, 100, "teal")
    }

    // The location of the top-left corner of the rectangle.
    private location: Point

    // The width and height of the rectangle.
    private size: Size

    /**
     * Constructs and initializes a rectangle with the specified location, size, and style.
     * 
     * @param x the X coordinate of the rectangle.
     * 
     * @param y the Y coordinate of the rectangle.
     * 
     * @param width the width of the rectangle.
     * 
     * @param height the height of the rectangle.
     * 
     * @param style the style used to draw the rectangle.
     */
    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    protected setupPath(path: Path2D): void {
        path.rect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

    /**
     * @returns a string containing the rectangle's location, size, and style.
     */
    public toString(): string {
        return `Rectangle with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

/**
 * Represents a circle that can be drawn on a 2D canvas.
 */
export class circle extends BaseShape {

    public static initWithXY(x: number, y: number) {
        return new circle(x, y, 50, "darkred")
    }

    // The center point of the circle.
    private center: Point

    // The radius of the circle.
    private radius: number

    /**
     * Constructs and initializes a circle with the specified center, radius, and style.
     * 
     * @param x the X coordinate of the center of the circle.
     * 
     * @param y the Y coordinate of the center of the circle.
     * 
     * @param radius the radius of the circle.
     * 
     * @param style the style used to draw the circle.
     */
    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }

    protected setupPath(path: Path2D): void {
        path.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI)
    }

    /**
     * @returns a string containing the circle's center, radius, and style.
     */
    public toString(): string {
        return `Circle with location ${this.center}, radius ${this.radius}, ${super.toString()}`
    }
}

/**
 * Represents a square that can be drawn on a 2D canvas.
 */
export class square extends BaseShape {

    public static initWithXY(x: number, y: number) {
        return new square(x, y, 100, 100, "cyan")
    }

    // The location of the top-left corner of the square.
    private location: Point

    // The width and height of the square.
    private size: Size

    /**
     * Constructs and initializes a square with the specified location, size, and style.
     * 
     * @param x the X coordinate of the square.
     * 
     * @param y the Y coordinate of the square.
     * 
     * @param width the width of the square.
     * 
     * @param height the height of the square.
     * 
     * @param style the style used to draw the square.
     */
    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    protected setupPath(path: Path2D): void {
        path.rect(this.location.x, this.location.y, this.size.width, this.size.height)
    }

    /**
     * @returns a string containing the square's location, size, and style.
     */
    public toString(): string {
        return `Square with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

/**
 * Represents a hexagon that can be drawn on a 2D canvas.
 */
export class hexagon extends BaseShape {

    public static initWithXY(x: number, y: number) {
        return new hexagon(x, y, 50, "orange")
    }

    // The center point of the hexagon.
    private center: Point

    // The radius of the hexagon.
    private radius: number

    /**
     * Constructs and initializes a hexagon.
     * 
     * @param x the X coordinate of the center.
     * 
     * @param y the Y coordinate of the center.
     * 
     * @param radius the radius of the hexagon.
     * 
     * @param style the style used to draw the hexagon.
     */
    constructor(x: number, y: number, radius: number, style: string) {
        super(style)
        this.center = new Point(x, y)
        this.radius = radius
    }

    protected setupPath(path: Path2D): void {
               ctx.beginPath()

        /**
         * Calculate and connect the six vertices of the hexagon.
        */
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i

            const x = this.center.x + this.radius * Math.cos(angle)
            const y = this.center.y + this.radius * Math.sin(angle)

            if (i === 0) {
                ctx.moveTo(x, y)
            } else {
                ctx.lineTo(x, y)
            }
        }

        ctx.closePath()
        ctx.fill()
    }

    /**
     * @returns a string containing the hexagon's center, radius, and style.
     */
    public toString(): string {
        return `Hexagon with center ${this.center}, radius ${this.radius}, ${super.toString()}`
    }
}

/**
 * Represents a rhombus that can be drawn on a 2D canvas.
*/
export class rhombus extends BaseShape {

    public static initWithXY(x: number, y: number) {
        return new rhombus(x, y, 50, 80, "pink")
    }

    // The location of the top-left corner of the rhombus.
    private location: Point

    // The width and height of the rhombus.
    private size: Size

    /**
     * Constructs and initializes a rhombus.
     * 
     * @param size the width and height of the rhombus.
     * 
     * @param location the top-left location of the rhombus.
     * 
     * @param style the style used to draw the rhombus.
     */
    constructor(x: number, y: number, width: number, height: number, style: string) {
        super(style)
        this.location = new Point(x, y)
        this.size = new Size(width, height)
    }

    protected setupPath(path: Path2D): void {
        ctx.beginPath()

            ctx.moveTo(
                this.location.x + this.size.width / 2,
                this.location.y
            )

            ctx.lineTo(
                this.location.x + this.size.width,
                this.location.y + this.size.height / 2
            )

            ctx.lineTo(
                this.location.x + this.size.width / 2,
                this.location.y + this.size.height
            )

            ctx.lineTo(
                this.location.x,
                this.location.y + this.size.height / 2
            )

            ctx.closePath()
            ctx.fill()
    }

    /**
     * @returns a string containing the rhombus's location, size, and style.
     */
    public toString(): string {
        return `Rhombus with location ${this.location}, size ${this.size}, ${super.toString()}`
    }
}

/**
 * Defines a location on a 2D plane, i.e. an (x,y) coordinate space.
 */
export class Point {

    // The X coordinate of the point.
    private _x: number

    // The Y coordinate of the point.
    private _y: number

    /**
     * Constructs and initializes a Point instance using the specified X and Y coordinates.
     * 
     * @param x the X coordinate of the newly created point.
     * 
     * @param y the Y coordinate of the newly created point.
     */
    public constructor(x: number, y: number) {
        this._x = x
        this._y = y
    }

    /**
     * Gets the X coordinate value of the point.
     */
    public get x() {
        return this._x
    }

    /**
     * Gets the Y coordinate value of the point.
     */
    public get y() {
        return this._y
    }

    /**
     * @returns a string representation for this point.
     */
    public toString(): string {
        return `${this.x}, ${this._y}`
    }

}

/**
 * Represents the width and height of a shape or object.
 */
export class Size {

    // The width of the object.
    private _width: number

    // The height of the object.
    private _height: number

    /**
     * Constructs and initializes a Size instance.
     * 
     * @param width the width of the object. Defaults to 0.
     * 
     * @param height the height of the object. Defaults to 0.
     */
    constructor(width = 0, height = 0) {
        this._width = width
        this._height = height
    }

    /**
     * Gets the width value.
     */
    public get width(): number {
        return this._width
    }

    /**
     * Gets the height value.
     */
    public get height(): number {
        return this._height
    }

    /**
     * @returns a string containing the width and height.
     */
    public toString(): string {
        return `${this.width} x ${this.height}`
    }
}
