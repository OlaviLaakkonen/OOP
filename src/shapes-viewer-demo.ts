import { ShapeViewer } from "./shape-viewer.js"
import { circle, rectangle } from "./shapes.js"

const shapeViewer: ShapeViewer = new ShapeViewer(document.getElementById("myCanvas") as HTMLCanvasElement)

shapeViewer.addShapes([
    new rectangle(100, 200, 200, 300, "dodgerblue"),
    new rectangle(350, 200, 100, 100, "dodgerblue"),
    new rectangle(300, 400, 200, 100, "dodgerblue"),
    new rectangle(500, 200, 200, 300, "dodgerblue"),

    new circle(100, 200, 50, "white"),
    new circle(700, 200, 50, "white"),
    new circle(100, 500, 50, "white"),
    new circle(700, 500, 50, "white"),
    
    new circle(450, 200, 50, "white"),
    new circle(350, 200, 50, "white"),
    new circle(350, 300, 50, "white"),
    new circle(450, 300, 50, "white"),
    
    new circle(300, 200, 50, "white"),
    new circle(500, 200, 50, "white"),
    new circle(300, 400, 50, "white"),
    new circle(500, 400, 50, "white"),
])

console.log(shapeViewer.toString())