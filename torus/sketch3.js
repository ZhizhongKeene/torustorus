var torusFour = function(p) {

  var refThree = document.getElementById("torus_four");

  var x = screen.width;
  var y = screen.height;


 p.setup = function() {
   let cnv = p.createCanvas(x, y, p.WEBGL);
   cnv.parent(refThree);
  }


  p.draw = function() {

   p.noStroke();
   let step =  p.frameCount * 10;

   p.ambientLight(10);
   p.pointLight(255, 0, 255, -700, 100, 100);
   p.pointLight(100, 150, 5, 100, 200, 100);
   p.pointLight(10, 10, 255, 600, 400, 400);
    p.pointLight(0, 100, 0, 600, -400, 200);
   p.specularMaterial(250);
   p.fill(255, 255, 100);

   p.shininess(4);

   p.translate(-200,-400);

   for (let i = 0; i < 10; i++) {

    p.translate(p.width / 20, p.height / 30);
    p.rotateZ(p.frameCount * 0.01);
    p.rotateY(p.frameCount * 0.01);
    p.rotate(p.frameCount * 0.01);
    p.torus(40,50,2,300);
    p.torus(3,10,7,300);

    p.translate(p.width / 20, p.height / 30);
    p.rotateZ(p.frameCount * 0.001);
    p.rotateY(p.frameCount * 0.001);
    p.rotate(p.frameCount * 0.001);
    p.torus(20,10,2,300);
    p.torus(30,15);



  }
}
}
new p5(torusFour);