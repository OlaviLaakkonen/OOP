import { AddShapeAction, SelectAction } from "./shape-actions.js"
import { PaletteComponent } from "./shape-palette.js"
import { ShapeViewer } from "./shape-viewer.js"
import { rectangle, circle } from "./shapes.js"

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement

const shapeViewer = new ShapeViewer(canvas)

const paletteElement = document.getElementById("palette")

new PaletteComponent(paletteElement, [
    new SelectAction(shapeViewer),
    new AddShapeAction(rectangle, shapeViewer),
    new AddShapeAction(circle, shapeViewer),
])
