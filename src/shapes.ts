export {}

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

export class rectangle {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.x = x;
        this.y = y; 
        this.width = width; 
        this.height = height;
    }

    draw() {
        ctx.fillStyle = "#008a65ff"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

export class circle {
    x: number;
    y: number;
    radius1: number;
    radius2: number;

    constructor(x = 0, y = 0, radius1 = 0, radius2 = 0) {
        this.x = x;
        this.y = y; 
        this.radius1 = radius1; 
        this.radius2 = radius2;
    }

    draw() {
        ctx.fillStyle = "#DA291C"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius1, this.radius2, this.radius1 * Math.PI)
        ctx.fill();
    }
}
