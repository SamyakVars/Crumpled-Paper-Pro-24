class Ground{

    constructor(){
        var options = {
            isStatic: true,
            friction: 1
        }


        this.body = Bodies.rectangle(width / 2, 640, width, 20, options)

        World.add(world, this.body)
    }

    show(){
        var pos = this.body.position



        fill(0, 110, 110)
        rectMode(CENTER)
        rect(pos.x, pos.y, width, 20)
    }
}