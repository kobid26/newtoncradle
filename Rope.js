

class Rope{
    constructor(body1, body2, xOffset, yOffset, length1) {
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x: this.xOffset, y: this.yOffset},
            length: length1
        }
        this.body2 = body2;
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.pointB;
        strokeWeight(5);
        stroke(0);
        
    }
}