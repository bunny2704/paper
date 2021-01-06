class ball
{ constructor(x,y,radius)
    { var options = { isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.2
        
     
       } 
  
  
  
  
  
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=radius;
    
     World.add(world, this.body); }
  
    display(){ var pose =this.body.position;
            
  
  
      push();
  
      translate(pose.x, pose.y) ;
  
 
 
  
  fill("purple");
  
  
  
  ellipse(0, 0,this.angle);
  pop();
    }
}