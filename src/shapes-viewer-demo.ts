import { ShapeViewer } from "./shape-viewer.js"
import { circle, rectangle } from "./shapes.js"

const shapeViewer: shapeViewer = new ShapeViewer(document.getElementById("myCanvas") as HTMLCanvasElement)

shapeViewer.addShapes([
    new rectangle(100, 200, 200, 300),
    new rectangle(350, 200, 100, 100),
    new rectangle(300, 400, 200, 100),
    new rectangle(500, 200, 200, 300),

    new circle(100, 200, 50),
    new circle(700, 200, 50),
    new circle(100, 500, 50),
    new circle(700, 500, 50),
    
    new circle(450, 200, 50),
    new circle(350, 200, 50),
    new circle(350, 300, 50),
    new circle(450, 300, 50),
    
    new circle(300, 200, 50),
    new circle(500, 200, 50),
    new circle(300, 400, 50),
    new circle(500, 400, 50),
])
