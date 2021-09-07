class Iron {
  constructor(x,y,width,height) {
    var options = {
      'density':30,
      'restitution':0.8,
      'friction':3
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("aqua");
    rect(pos.x, pos.y, this.width, this.height);
  }
};


class Rubber {
  constructor(x,y,r)
  {
  // assign options to the rubber ball

  var options = {
    'density':12,
    'friction': 5,
    'restitution':0.3
    };

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
    World.add(world, this.body);

  }
  display()
  {
      var rubberpos=this.body.position;		
      push()
      translate(rubberpos.x, rubberpos.y);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("black");
      fill("darkblue");
      //draw the ellipse here to display the rubber ball
      ellipse(pos.x,pos.y,this.r);

      pop()
  }

}

class  Stone {
    constructor(x,y,width,height) {
      var options = {
		  'density':12,
		  'restitution':0.9,
		  'friction':0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
     
    }
  };


  class Dubber {
    constructor(x,y,width,height) {
      var options = {
        'density':1,
        'restitution':0.3,
        'friction':5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("orange");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  

  
  
  