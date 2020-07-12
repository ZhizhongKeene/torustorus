var torusOne = function(sketch) {
  var x = screen.width;
  var y = screen.height;
  var ref = document.getElementById("torus_one");

  sketch.setup = function() {
    let cnv = sketch.createCanvas(x, y, sketch.WEBGL);
    cnv.parent(ref);
  }

  sketch.draw = function() {
    sketch.noStroke();
    let step = sketch.frameCount * 10;

    sketch.ambientLight(10);
    sketch.pointLight(0, 255, 0, 100, 100, 50);
    sketch.pointLight(255, 255, 5, 10, 200, 10);
    sketch.pointLight(0, 250, 0, 100, 40, 10);
    sketch.pointLight(0, 0, 255, 600, 40, 10);
    sketch.specularMaterial(250);  
    sketch.shininess(4);
    
  sketch.translate(-200,-200,-100)
  for (let i = 0; i < 10; i++)  {
     sketch.translate(100,10,100);
   sketch.rotateY(sketch.frameCount * - 0.001);
   sketch.rotateX(sketch.frameCount * - 0.001);
   sketch.rotateZ(sketch.frameCount *  - 0.01);
   sketch.fill(255,255,255); 
    sketch.torus(30,100,3,3);
    sketch.torus(300,100,2,3);
  }
  }
}

new p5(torusOne);

