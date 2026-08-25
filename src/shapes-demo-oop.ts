import { rectangle } from "./shapes.js";
import { circle } from "./shapes.js";

const rectang = new rectangle(100, 200, 200, 300)
const rectang2 = new rectangle(350, 200, 100, 100)
const rectang3 = new rectangle(300, 400, 200, 100)
const rectang4 = new rectangle(500, 200, 200, 300)

const circ = new circle(100, 200, 50, 50)
const circ2 = new circle(350, 200, 100, 100)
const circ3 = new circle(300, 400, 200, 100)
const circ4 = new circle(500, 200, 200, 300)

rectang.draw()
rectang2.draw()
rectang3.draw()
rectang4.draw()

circ.draw()
circ2.draw()
circ3.draw()
circ4.draw()