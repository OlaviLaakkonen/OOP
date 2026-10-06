import { ShapeViewer } from "./shape-viewer.js"
import { circle, rectangle, square, hexagon, rhombus } from "./shapes.js"

let shapeViewer: ShapeViewer = new ShapeViewer(document.getElementById("myCanvas") as HTMLCanvasElement)

/*
Maldives
*/
shapeViewer.addShapes([
    new rectangle(400, 200, 400, 200, "#C8102E"),
    new rectangle(450, 230, 300, 140, "#007E3A"),
    new circle(620, 300, 50, "white"),
    new circle(640, 300, 50, "#007E3A")
])

/*
Verity
*/
shapeViewer.addShapes([
    new circle(200, 200, 150, "yellow"),
    new square(100, 110, 80, 80, "black"),
    new square(220, 120, 80, 80, "black"),
    new rectangle(100, 250, 200, 50, "black")
])

/*
Hive
*/
shapeViewer.addShapes([
    new hexagon(150, 550, 50, "#ffd476ff"),
    new hexagon(230, 505, 50, "#ffd476ff"),
    new hexagon(150, 460, 50, "#ffd476ff"),
    new hexagon(230, 412, 50, "#ffd476ff"),
    new hexagon(70, 505, 50, "#ffd476ff"),
    new hexagon(310, 457, 50, "#ffd476ff")
])

/*
Jussi
*/
shapeViewer.addShapes([
    new rhombus(400, 450, 50, 100, "red"),
    new rhombus(450, 450, 50, 100, "red"),
    new rhombus(500, 450, 50, 100, "red"),
    new rhombus(425, 500, 50, 100, "black"),
    new rhombus(475, 500, 50, 100, "black"),
    new rhombus(525, 500, 50, 100, "black")
])