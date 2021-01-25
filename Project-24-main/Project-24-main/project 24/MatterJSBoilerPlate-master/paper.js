class paper {
 constructor (x,y,radius){
     this.image.loadImage("paper.png")
     var options ={
    isStatic=false,
    restitution=0.3,
    density=1.2,
    friction=0.5,
    }
     Matter.Bodies.circle(x, y,radius, options);
    this.radius=radius;
    World.add(world, this.body) 
    display();{
var pos=this.body.position();
ellipseMode(center)
fill(rgb(128,0,128)) 
   }
}
}
