
class Paper {

    constructor(x, r){

        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }



        this.r = r

        this.body = Bodies.circle(x, 450, this.r, options)

        World.add(world, this.body)
    }

    show(){

        var pos = this.body.position


        fill(255)

        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r)
    }
}