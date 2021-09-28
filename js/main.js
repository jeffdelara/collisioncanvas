import Game from "./game.js";
import CircleCollide from "./circlecollide.js";
import RectCollide from "./rectcollide.js";

const fps = 60;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const game = Game(canvas, ctx);
const mouse = canvas.addEventListener('mousemove', mouseHandler);
let mouseX, mouseY;

const square1 = {x: 0, y: 500, width: 800, color: "red"}
const square2 = {x: 0, y: 220, width: 50, color: "blue"}
let state = 'playing';
let xDirection = 1;
let yDirection = 1;
game.createCanvas(800, 800);
let hit = 0;
let colors = ["black", "red"];

const c1 = {x: mouseX, y: mouseY, radius: 80}
const c2 = {x: 200, y: 200, radius: 100}

const circCollide = CircleCollide();
function update()
{

    // CIRCLE
    c1.x = mouseX;
    c1.y = mouseY;
    

    // circle collision?
    if(circCollide.isCollide(c1, c2)) console.log("Collide!");



    // SQUARE
    square2.x += xDirection;
    square2.y += yDirection;

    // if on a platformer, square2 is the player
    // square1 is the ground
    // it sets the position of the player 
    // to always be on top of the ground 
    // when it hits
    if(square1.y < square2.y + square2.width) 
    {
        square2.y = square1.y - square2.width;
        square1.color = colors[hit % 2];
        hit++;
        yDirection = -1;
    }

    if(square2.x + square2.width > canvas.width) 
    {
        xDirection = -1;
    }

    if(square2.y < 0) 
    {
        yDirection = 1;
    }

    if(square2.x < 0)
    {
        xDirection = 1;
    }

    // collision detection
    // a collision is detected when (right of) square1's x coordinate plus its width 
    // becomes greater than (left of) square2's x coordinate
    if(square1.x + square1.width > square2.x && 
       square1.y + square1.width > square2.y && 
       square1.x < square2.x + square2.width && 
       square1.y < square2.y + square2.width) 
       {
            square2.y = square1.y - square2.width;
            // square1.color = "black";
            state = null;
       }
    else square1.color = "red";

}

function draw() 
{
    game.drawSquare(square1.x, square1.y, square1.width, square1.color);
    game.drawSquare(square2.x, square2.y, square2.width, square2.color);

    game.drawCircle(c1.x, c1.y, c1.radius);
    game.drawCircle(c2.x, c2.y, c2.radius);

    ctx.beginPath();
    ctx.moveTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.stroke();

    ctx.fillText(`Distance X: ${c1.x - c2.x} Y: ${c1.y - c2.y}`, c1.x, c1.y);
}

function run() 
{
    setTimeout(function(){
        clear();

        update();
        draw();

        requestAnimationFrame(run);
    }, 1000/fps);
}

requestAnimationFrame(run);

function clear() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mouseHandler(event)
{  
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left; 
    mouseY = event.clientY - rect.top;
}