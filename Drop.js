class Drop{
    constructor(x,y,radius){
        
        this.body = ellipse(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    
    fall(speed){
        this.y +=speed;
    }
  
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }
