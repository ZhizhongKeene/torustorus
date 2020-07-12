var torusTwo = function(p) {

  var refOne = document.getElementById("torus_two");

  var x = screen.width;
  var y = screen.height;

  p.setup = function() {
   let cnv = p.createCanvas(x, y, p.WEBGL);
   cnv.parent(refOne);
  }

  p.draw = function() {
    // background(0);
    p.noStroke();
    let step = p.frameCount * 10;

    p.ambientLight(10);
    p.pointLight(255, 255, 0, 100, 100, 50);
    p.pointLight(10, 255, 255, 10, 200, 100);
    p.pointLight(255, 100, 100, 100, 40, 10);
    p.pointLight(0, 255, 0, 600, 40, 10);
    p.specularMaterial(100);
    p.fill(255, 2, 255);
    p.shininess(4);

  p.translate(-200,-200)
    for (let i = 0; i < 1; i++) {
      p.rotateY(p.frameCount * -0.005);
      p.rotateX(p.frameCount * -0.01);
      p.rotateZ(p.frameCount * -0.01);
      p.shearY(p.PI / 10.0);
      p.torus(150, 200,2, 300);

    for (let i = 0; i < 20; i++) {
     p.translate (50,30);
     p.rotateX(p.frameCount * -0.0001);
     p.rotateY(p.frameCount * -0.0001);
     p.rotateZ(p.frameCount * -0.01);
     p.fill(255, 2, 255, 255);
     p.torus (20,40,2,200);
  }

  }
  }
}

new p5(torusTwo);