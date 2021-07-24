class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.image2 = loadImage("Walking Frame/batman.png")
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        if(frameCount < 200 & frameCount > 300){
        image(this.image2,pos.x,pos.y+70,300,300);
        }
        else{
        image(this.image,pos.x,pos.y+70,300,300);
        }
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
