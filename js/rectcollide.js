const RectCollide = () => {

    /**
     * Detects collision on the LEFT
     * @param {x, y, width, height} main The main reference point (player)
     * @param {x, y, width, height} otherObject Other objects
     */
    const isLeft = (main, otherObject) => {
        return main.x < otherObject.x + otherObject.width;
    }

    /**
     * Detects collision on the RIGHT
     * @param {x, y, width, height} main The main reference point (player)
     * @param {x, y, width, height} otherObject Other objects
     */
    const isRight = (main, otherObject) => {
        return main.x + main.width > otherObject.x;
    }

    /**
     * Detects collision on the BOTTOM
     * @param {x, y, width, height} main The main reference point (player)
     * @param {x, y, width, height} otherObject Other objects
     */
     const isBottom = (main, otherObject) => {
        return main.y + main.height > otherObject.y;
    }

    /**
     * Detects collision on TOP
     * @param {x, y, width, height} main The main reference point (player)
     * @param {x, y, width, height} otherObject Other objects
     */
     const isTop = (main, otherObject) => {
        return main.y < otherObject.y + otherObject.height;
    }

    /**
     * Detects collision on all sides of the rectangle
     * @param {x, y, width, height} main The main reference point (player)
     * @param {x, y, width, height} otherObject 
     * @returns 
     */
    const isAllSides = (main, otherObject) => {
        return main.x + main.width > otherObject.x && 
               main.y + main.width > otherObject.y && 
               main.x < otherObject.x + otherObject.width && 
               main.y < otherObject.y + otherObject.height;
    }

    return { isTop, isBottom, isLeft, isRight, isAllSides }
}

export default RectCollide;