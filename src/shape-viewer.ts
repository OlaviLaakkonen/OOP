import { Shape } from "./shapes.js";
import { ShapeSelectionEvent } from "./ShapeSelectionEvent.js";
import { ShapeSelectionListener } from "./ShapeSelectionListener.js";

/**
 * Represents a viewer that displays shapes on a canvas.
 */
export class ShapeViewer implements ShapeViewer {

    // The 2D rendering context used to draw the shapes.
    private _ctx: CanvasRenderingContext2D

    private _canvas: HTMLCanvasElement

    // The collection of shapes currently displayed by the viewer.
    private _shapes: Shape[]

    private _selectedShape: Shape

    private _selectionListeners: ShapeSelectionListener[] = [];


    public addSelectionListener(listener: ShapeSelectionListener): void {
        this._selectionListeners.push(listener);

        console.log(
            "Selection listener added. Number of listeners:",
            this._selectionListeners.length
        );
    }

    private fireSelectionEvent(event: ShapeSelectionEvent): void {
        console.log(
            "Firing selection event. Listeners:",
            this._selectionListeners.length
        );

        this._selectionListeners.forEach((listener) => {
            console.log("Calling listener");
            listener.shapeSelected(event);
        });
    }



    /**
     * Constructs and initializes a ShapeViewer using the specified canvas element.
     * 
     * @param canvasElement the canvas element used to display the shapes.
     */
    public constructor(canvasElement: HTMLCanvasElement) {
        this._canvas = canvasElement
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

    public getShapeAt(x: number, y: number): Shape {
        let shape: Shape = null

        this._shapes.forEach(s => {
            const path = s.path

            if (this._ctx.isPointInPath(path, x, y)) {
                shape = s
            }
        })

        return shape
    }

    public selectShape(shape: Shape): void {
        this._selectedShape = shape

        this.draw()

        console.log("ShapeViewer: shape selected", shape);

        this.fireSelectionEvent(new ShapeSelectionEvent(shape));
    }

    public clearSelection(): void {
        this.selectShape(null)
    }

    /**
     * Draws all shapes currently stored in the viewer.
     * Each shape is drawn using the viewer's canvas rendering context.
     */
    private draw(): void {

        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)

        this._shapes.forEach(shape => {
            
            this._ctx.save()

            shape.draw(this._ctx)

            if (shape == this._selectedShape) {
                shape.drawSelectionBorder(this._ctx)
            }

            this._ctx.restore()
        })
    }
}