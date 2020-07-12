var torusThree = function(p) {

  var refTwo = document.getElementById("torus_three");

  var x = screen.width;
  var y = screen.height;


 p.setup = function() {
   let cnv = p.createCanvas(x, y, p.WEBGL);
   cnv.parent(refTwo);
  }


  p.draw = function() {

   p.noStroke();
   let step =  p.frameCount * 10;

   p.ambientLight(10);
   p.pointLight(255, 255, 0, -700, 100, 50);
   p.pointLight(250, 0, 5, 10, 200, 100);
   p.pointLight(100, 100, 100, 600, 40, 10);
   p.specularMaterial(250);
   p.fill(255, 255, 100);

   p.shininess(4);

   p.translate(-200,-400);

   for (let i = 0; i < 7; i++) {

    p.translate(p.width / 20, p.height / 30);
    p.rotateZ(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.rotate(p.frameCount * 0.01);
    p.torus(40,50,2,300);
    p.torus(30,40,3,300);

    p.translate(p.width / 20, p.height / 30);
    p.rotateZ(p.frameCount * 0.001);
    p.rotateY(p.frameCount * 0.001);
    p.rotate(p.frameCount * 0.001);
    p.torus(20,10,2,300);
    p.torus(30,40,4,300);

     for (let i = 0; i < 2; i++) {

    p.translate(p.width / 20, p.height / 30);
    p.rotateZ(p.frameCount * 0.001);
    p.rotate(p.frameCount * 0.001);
    p.torus(4,50,2,300);
    p.torus(1,40,10,300);

  }

  }
}
}
new p5(torusThree);