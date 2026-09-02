import { shape } from "./shapes.js";

export class ShapeViewer {

    ctx: CanvasRenderingContext2D
    shapes: shape[]

    constructor(canvasElement: HTMLCanvasElement) {
        this.ctx = canvasElement.getContext("2d")
        this.shapes = []
    }
 
    addShapes(shapes: shape[]): void {
        this.shapes.push(...shapes)
        this.draw()
    }

    addShape(shape: shape): void {
        this.shapes.push(shape)
        this.draw()
    }

    draw(): void {
        this.shapes.forEach(shape => shape.draw(this.ctx))
    }
}