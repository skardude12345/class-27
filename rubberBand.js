class RubberBand {

constructor(body1, body2){
var prop = {
    bodyA: body1, 
    bodyB: body2,

    length: 35,
    stiffness: 0.2
}

this.constraint = Matter.Constraint.create(prop);
World.add(world, this.constraint);



}


display(){
    var point1 = this.constraint.bodyA.position
    var point2 = this.constraint.bodyB.position;

push();

strokeWeight(3);
line(point1.x, point1.y, point2.x, point2.y);


pop();
}



}