class Paper{
    constructor(x,y,r){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
       
        
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}
