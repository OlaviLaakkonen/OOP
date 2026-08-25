export { }

const canvas: HTMLCanvasElement = document.getElementById("myCanvas") as HTMLCanvasElement
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")

const xCenter: number = canvas.width / 2
const yCenter: number = canvas.height / 2

const rectangle = {
    x: xCenter - 200,
    y: yCenter - 100,
    width: 400,
    height: 200,

    draw: function() {
        ctx.fillStyle = "#006A4E",
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

const rectangle2 = {
    x: xCenter - 190,
    y: yCenter - 93,
    width: 400,
    height: 200,

    draw: function() {
        ctx.fillStyle = "#008a65ff",
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

const rectangle3 = {
    x: xCenter - 180,
    y: yCenter - 86,
    width: 400,
    height: 200,

    draw: function() {
        ctx.fillStyle = "#009c73ff",
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
};

rectangle3.draw() // Bottom
rectangle2.draw() // Middle
rectangle.draw() // Top

const circle = {
    x: xCenter - 20,
    y: yCenter - 0,
    radius1: 70,
    radius2: 0,

    draw: function() {
        ctx.fillStyle = "#DA291C"
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius1, circle.radius2, circle.radius1 * Math.PI)
        ctx.fill();
    }
}

circle.draw()