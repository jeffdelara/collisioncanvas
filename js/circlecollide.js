const CircleCollide = () => {

    /**
     * 
     * @param {x, y, radius} main Main point of reference (the player)
     * @param {x, y, radius} otherObject other object
     * @returns 
     */
    const isCollide = (main, otherObject) => {
        const distanceX = main.x - otherObject.x; 
        const distanceY = main.y - otherObject.y;
        const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

        return distance < main.radius + otherObject.radius;
    }

    function getDistance(main, otherObject) 
    {
        const distanceX = main.x - otherObject.x; 
        const distanceY = main.y - otherObject.y;
        const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

        return distance;
    }

    return { isCollide, getDistance }
}

export default CircleCollide;