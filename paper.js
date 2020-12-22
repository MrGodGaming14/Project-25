class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

		this.image=loadImage("sprites/paper.png");

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(0);
			fill("white")
			ellipse(0,0,this.r, this.r);
			imageMode(CENTER);
		image(this.image, 0, -50, this.width, this.height);
			pop()
			
	}

}