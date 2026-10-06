import { Shape } from "./shapes.js";

/**
 * Represents a viewer that displays shapes on a canvas.
 */
export class ShapeViewer implements ShapeViewer {

    // The 2D rendering context used to draw the shapes.
    private _ctx: CanvasRenderingContext2D

    // The collection of shapes currently displayed by the viewer.
    private _shapes: Shape[]

    /**
     * Constructs and initializes a ShapeViewer using the specified canvas element.
     * 
     * @param canvasElement the canvas element used to display the shapes.
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this._ctx = canvasElement.getContext("2d")
        this._shapes = []
    }

    /**
     * Adds multiple shapes to the viewer and draws them on the canvas.
     * 
     * @param shapes the shapes to add to the viewer.
     */
    public addShapes(shapes: Shape[]): void {
        this._shapes.push(...shapes)
        this.draw()
        shapes.forEach(shape => console.log(`Added shape ${shape}`))
    }

    /**
     * Adds a single shape to the viewer and draws it on the canvas.
     * 
     * @param shape the shape to add to the viewer.
     */
    public addShape(shape: Shape): void {
        this._shapes.push(shape)
        this.draw()
        console.log(`Added shape ${shape}`)
    }

    /**
     * Draws all shapes currently stored in the viewer.
     * Each shape is drawn using the viewer's canvas rendering context.
     */
    private draw(): void {
        this._shapes.forEach(shape => {
            this._ctx.save()

            shape.draw(this._ctx)

            this._ctx.restore()
        })
    }

}
