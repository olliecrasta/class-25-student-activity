class Log extends Base{
    constructor(x, y, height, angle) {
     super(x,y,20,height);
      Matter.Body.setAngle(this.body, angle);
      this.image=loadImage("sprites/log.png")
     
    }
    
  };
  