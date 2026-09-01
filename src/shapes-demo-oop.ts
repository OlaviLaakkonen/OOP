import { rectangle } from "./shapes.js";
import { circle } from "./shapes.js";

const rectang = new rectangle(100, 200, 200, 300)
const rectang2 = new rectangle(350, 200, 100, 100)
const rectang3 = new rectangle(300, 400, 200, 100)
const rectang4 = new rectangle(500, 200, 200, 300)

const circ = new circle(100, 200, 50)
const circ2 = new circle(700, 200, 50)
const circ3 = new circle(100, 500, 50)
const circ4 = new circle(700, 500, 50)

const circ5 = new circle(450, 200, 50)
const circ6 = new circle(350, 200, 50)
const circ7 = new circle(350, 300, 50)
const circ8 = new circle(450, 300, 50)

const circ9 = new circle(300, 200, 50)
const circ10 = new circle(500, 200, 50)
const circ11 = new circle(300, 400, 50)
const circ12 = new circle(500, 400, 50)

rectang.draw()
rectang2.draw()
rectang3.draw()
rectang4.draw()

circ.draw()
circ2.draw()
circ3.draw()
circ4.draw()
circ5.draw()
circ6.draw()
circ7.draw()
circ8.draw()
circ9.draw()
circ10.draw()
circ11.draw()
circ12.draw()