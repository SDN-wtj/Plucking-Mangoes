class Tree{
    constructor(x,y,width, heigtht){
    var options = {
        isStatic: true
    }
    this.body=bodies.rectangle(x,y,width,height,options);
    this.height=height;
    this.width=width;
    this.image = loadImage("tree.png");
    }
        display(){
            rectMode(CENTER);
            rect(this.body.position.x, this.body.position.y,this.body.position.width,this.body.positon.height);
        }
}