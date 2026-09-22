import { Shape } from "./shapes.js";

export class ShapeViewer implements ShapeViewer {

    private _ctx: CanvasRenderingContext2D

    private _shapes: Shape[]

    public constructor(canvasElement: HTMLCanvasElement) {
        this._ctx = canvasElement.getContext("2d")
        this._shapes = []
    }

    public addShapes(shapes: Shape[]): void {
        this._shapes.push(...shapes)
        this.draw()
        shapes.forEach(shape => console.log(`Added shape ${shape}`))
    }

    public addShape(shape: Shape): void {
        this._shapes.push(shape)
        this.draw()
        console.log(`Added shape ${shape}`)
    }

    private draw(): void {
        this._shapes.forEach(shape => {
            this._ctx.save()

            shape.draw(this._ctx)

            this._ctx.restore()
        })
    }

}