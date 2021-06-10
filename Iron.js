class Iron{
	constructor(x, y) {
		var options = {
		  'density':12,
		  'friction': 0.9,
		  'restitution':0.3
		};
		this.body = Bodies.rectangle(x, y, 50, 50, options);
		this.width=120
		this.height=60
		this.x=x;
		this.y=y;
		World.add(world, this.body);
	  };
	  display(){
		var ironpos = this.body.position;
		
	
		push();
		translate(ironpos.x ,ironpos.y);
		
		strokeWeight(3);
		stroke('red')
		fill('black')
		rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();
	  };
	};