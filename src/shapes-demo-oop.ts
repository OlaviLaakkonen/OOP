import { ShapeViewer } from "./shape-viewer.js"
import { circle, rectangle } from "./shapes.js"

let shapeViewer: ShapeViewer = new ShapeViewer(document.getElementById("canvas") as HTMLCanvasElement)

shapeViewer.addShapes([
    new rectangle(400, 200, 400, 200, "red"),
    new rectangle(350, 275, 200, 100, "green"),
    new rectangle(500, 400, 50, 100, "pink"),
    new circle(150, 150, 50, "blue"),
    new circle(650, 150, 100, "gray"),
    new circle(400, 450, 150, "violet")
])

shapeViewer.addShape(new rectangle(100, 100, 200, 100, "pink"))