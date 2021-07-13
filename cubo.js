class Cubo {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.9,
          'friction':0.3,
          'density':1.0,
           isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(175, 224, 163);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  