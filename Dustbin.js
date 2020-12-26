var body1, body2, body3;


class Dustbin{

    constructor(){

    //var body1, body2, body3

    body1 = Bodies.rectangle(520, 592.5, 15, 75, {isStatic: true})
	body2 = Bodies.rectangle(602.5, 622.5, 150, 15, {isStatic: true})
	body3 = Bodies.rectangle(682.5, 592.5, 15, 75, {isStatic: true})

	World.add(world, body1)
	World.add(world, body2)
    World.add(world, body3)
    

    }

    show(){
        var pos1 = body1.position
        var pos2 = body2.position
        var pos3 = body3.position

        fill(255, 0, 0)

        rectMode(CENTER)
        rect(pos1.x, pos1.y, 15, 75)
        rect(pos2.x, pos2.y, 150, 15)
        rect(pos3.x, pos3.y, 15, 75)

    }



}