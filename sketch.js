let ellipseSize = 2;
let x = 135;
let y = 78;
let z = 125;
let a = 190;


function setup() {
  createCanvas(400, 400);
    
let canvas = createCanvas(400,400);
canvas.parent('pumpkin');
}



function draw() {
  background(30);
  
  fill (90);
  rect (0, 350, 400, 50);
  
  strokeWeight (20);
  stroke (42,125,0);
  line (200, 200, 200, 130);
  
  
  fill(235, 125, 52)
  stroke (87, 29, 0);
  strokeWeight(1.5)
  ellipse (200, 270, 300, 220);
  ellipse (200, 270, 240, 220);
  ellipse (200, 270, 120, 220);
  
  
  fill(0);
  stroke (0);
  triangle (150, 225, 175, 270, 125, 270);
  triangle (250, 225, 275, 270, 225, 270);
  rect (160, 295, 80, 30);
  triangle (160, 295, 160, 324, 130, 295);
  triangle (220, 295, 240, 324, 270, 295);
  
  fill(235, 155, 52)
  triangle (145, 295, 185, 295, 165, 310);
  triangle (215, 295, 255, 295, 235, 310);
  triangle (185, 325, 215, 325, 200, 310);
  
  fill (152, 40, 60);
  ellipse (149, 255, ellipseSize);
  ellipse (249, 255, ellipseSize);
  
  fill (230);
  ellipse (85, 90, 150, 150)
  fill (30)
  noStroke()
  ellipse (140, 70, 150, 150)
  
  if (ellipseSize < 20) {
    ellipseSize = ellipseSize + .15;
  } 
  else {
    ellipseSize = ellipseSize - 18;
  }

  fill (200);
  noStroke ()
  ellipse (x, 85, 240, 40);
  ellipse (y, 70, 90, 60);
  ellipse (z, 55, 80, 60);
  ellipse (a, 70, 90, 60);
  
  if (x < 650) {
    x = x + 2;
  }
  else {
    x = -200;
  }
  
  if (y < 650) {
    y = y + 2;
  }
  else {
    y = -200;
  }
  
  if (z < 650) {
    z = z + 2;
  }
  else {
    z = -200;
  }
  
  if (a < 650) {
    a = a + 2;
  }
  else {
    a = -200;
  }
  
  
  
  
  
  
}