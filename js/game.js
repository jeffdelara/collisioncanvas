const Game = (canvas, ctx) => {
    
    const createCanvas = (width, height) => {
        canvas.width = width;
        canvas.height = height;
    }
    
    const drawCircle = (x, y, radius) => {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    const drawSquare = (x, y, width, color) => {
        ctx.beginPath();
        ctx.rect(x, y, width, width);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
    
    return { createCanvas, drawCircle, drawSquare }
}

export default Game;