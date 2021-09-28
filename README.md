# Collision Modules

This is a collection of module and functions for detecting collision on canvas element. I realized that I've been creating projects on canvas lately and it would be helpful to organize the collision codes.

## Installation

Include the files: `circlecollide.js` & `rectcollide.js` by import module or by `<script src>`.

## Usage

You can check 2 objects if they collide. 

### Rectangle Collision

    const square1 = {x: 0, y: 500, width: 800, color: "red"}
    const square2 = {x: 0, y: 220, width: 50, color: "blue"}

    const collide = RectCollide();
    collide.isAllSides(square1, square2);

### Circle Collision

    const circle1 = {x: 100, y: 100, radius: 80}
    const circle2 = {x: 200, y: 200, radius: 100}

    const cicCollide = CircleCollide();
    circCollide.isCollide(circle1, circle2);