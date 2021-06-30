var canvas;
var gl;
var V;
var P;
var near = 1;
var far = 250;


var time = 0.0;
var timeDelta = 0.5;

var ms = new MatrixStack();

function init() {
  canvas = document.getElementById("webgl-canvas");

  // Configure our WebGL environment
  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) { alert("WebGL initialization failed"); }

  gl.clearColor(222/255, 222/255, 222/255, 1.0);
  gl.enable(gl.DEPTH_TEST);

  for (var name in spheres ) {
    var sphere = spheres[name].model = new Sphere();

    sphere.uniforms = { 
      color : gl.getUniformLocation(sphere.program, "color"),
      MV : gl.getUniformLocation(sphere.program, "MV"),
      P : gl.getUniformLocation(sphere.program, "P")
    };
  }

  for (var name in cylinders) {
    var cylinder = cylinders[name].model = new Cylinder();

    cylinder.uniforms = {
      color : gl.getUniformLocation(cylinder.program, "color"),
      MV : gl.getUniformLocation(cylinder.program, "MV"),
      P : gl.getUniformLocation(cylinder.program, "P")
    };
  }

  for (var name in backgrounds) {
    var backdrop = backgrounds[name].model = new BG(backgrounds[name].source);

    backdrop.uniforms = {
      texture : gl.getUniformLocation(backdrop.program, "uTexture"),
      MV : gl.getUniformLocation(backdrop.program, "MV"),
      P : gl.getUniformLocation(backdrop.program, "P")
    };
  }

  resize();

  window.requestAnimationFrame(render);  
}


function render() {
  time += timeDelta;

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  V = translate(0.0, 0.0, -0.5*(near + far));
  ms.load(V);  

  drawBG(backgrounds[name], ms);
  drawSpheres(spheres[name], ms);
  drawCylinders(cylinders[name], ms);

  window.requestAnimationFrame(render);
}

function drawSpheres(data, ms, pointMode) {
  var name, data, sphere;

  // Outer ring of wheel
  name = "tire";
  sphere = spheres[name];

  sphere.model.PointMode = false;

  ms.push();
  ms.rotate(time * 2, [0, 0, 1]);
  ms.translate(0, 0, (sphere.distance));
  ms.scale(sphere.radius);
  gl.useProgram(sphere.model.program);
  gl.uniformMatrix4fv(sphere.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(sphere.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(sphere.model.uniforms.color, flatten(sphere.color));
  sphere.model.render();
  ms.pop();

  // "Background" circle of wheel
  name = "wheel";
  sphere = spheres[name];

  sphere.model.PointMode = false;

  ms.push();
  ms.rotate(time * 2, [0, 0, 1]);
  ms.translate(0, 0, (sphere.distance));
  ms.scale(sphere.radius);
  gl.useProgram(sphere.model.program);
  gl.uniformMatrix4fv(sphere.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(sphere.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(sphere.model.uniforms.color, flatten(sphere.color));
  sphere.model.render();
  ms.pop();

  // Inner circle of wheel
  name = "center";
  sphere = spheres[name];

  sphere.model.PointMode = false;

  ms.push();
  ms.rotate(time * 2, [0, 0, 1]);
  ms.translate(0, 0, (sphere.distance));
  ms.scale(sphere.radius);
  gl.useProgram(sphere.model.program);
  gl.uniformMatrix4fv(sphere.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(sphere.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(sphere.model.uniforms.color, flatten(sphere.color));
  sphere.model.render();
  ms.pop();
}

function drawCylinders(data, ms, pointMode) {
  var name, data, cylinder;

  // Wheel spokes
  name = "spoke1";
  cylinder = cylinders[name];

  cylinder.model.PointMode = false;

  ms.push();
  ms.rotate(90, [0, -1, 0]);
  ms.rotate(time * 2, [1, 0, 0]);
  ms.translate(20, 0, (cylinder.distance));
  ms.scale(cylinder.radius);
  ms.scale(1, 1, 7);
  gl.useProgram(cylinder.model.program);
  gl.uniformMatrix4fv(cylinder.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(cylinder.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(cylinder.model.uniforms.color, flatten(cylinder.color));
  cylinder.model.render();
  ms.pop();


  name = "spoke2";
  cylinder = cylinders[name];

  cylinder.model.PointMode = false;

  ms.push();
  ms.rotate(90, [0, -1, 0]);
  ms.rotate(45, [1, 0, 0]);
  ms.rotate(time * 2, [1, 0, 0]);
  ms.translate(25, 0, (cylinder.distance));
  ms.scale(cylinder.radius);
  ms.scale(1, 1, 7);
  gl.useProgram(cylinder.model.program);
  gl.uniformMatrix4fv(cylinder.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(cylinder.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(cylinder.model.uniforms.color, flatten(cylinder.color));
  cylinder.model.render();
  ms.pop();


  name = "spoke3";
  cylinder = cylinders[name];

  cylinder.model.PointMode = false;

  ms.push();
  ms.rotate(90, [0, -1, 0]);
  ms.rotate(90, [1, 0, 0]);
  ms.rotate(time * 2, [1, 0, 0]);
  ms.translate(25, 0, (cylinder.distance));
  ms.scale(cylinder.radius);
  ms.scale(1, 1, 7);
  gl.useProgram(cylinder.model.program);
  gl.uniformMatrix4fv(cylinder.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(cylinder.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(cylinder.model.uniforms.color, flatten(cylinder.color));
  cylinder.model.render();
  ms.pop();


  name = "spoke4";
  cylinder = cylinders[name];

  cylinder.model.PointMode = false;

  ms.push();
  ms.rotate(90, [0, -1, 0]);
  ms.rotate(135, [1, 0, 0]);
  ms.rotate(time * 2, [1, 0, 0]);
  ms.translate(25, 0, (cylinder.distance));
  ms.scale(cylinder.radius);
  ms.scale(1, 1, 7);
  gl.useProgram(cylinder.model.program);
  gl.uniformMatrix4fv(cylinder.model.uniforms.MV, false, flatten(ms.current()));
  gl.uniformMatrix4fv(cylinder.model.uniforms.P, false, flatten(P));
  gl.uniform4fv(cylinder.model.uniforms.color, flatten(cylinder.color));
  cylinder.model.render();
  ms.pop();


}

function drawBG(data, ms) {
  var name, back, data;

  name = "bg1";
  back = backgrounds[name];

  back.model.PointMode = false;

  ms.push();
  ms.rotate(180, [0, 0, 1]);
  ms.translate(135 - time, 0, -20);
  if (time == 140) {
    time = 0;
  }
  ms.scale(70, 70, 1);
  gl.useProgram(back.model.program);
  gl.uniformMatrix4fv(back.model.uniforms.MV, false, flatten(ms.current()));
	gl.uniformMatrix4fv(back.model.uniforms.P, false, flatten(P));
	gl.uniform1i(back.model.uniforms.texture, 0);
  back.model.render();
  ms.pop();

  name = "bg2";
  back = backgrounds[name];

  back.model.PointMode = false;

  ms.push();
  ms.rotate(180, [0, 0, 1]);
  ms.translate(-5 - time, 0, -20);
  if (time == 140) {
    time = 0;
  }
  ms.scale(70, 70, 1);
  gl.useProgram(back.model.program);
  gl.uniformMatrix4fv(back.model.uniforms.MV, false, flatten(ms.current()));
	gl.uniformMatrix4fv(back.model.uniforms.P, false, flatten(P));
	gl.uniform1i(back.model.uniforms.texture, 0);
  back.model.render();
  ms.pop();
} 

function resize() {
  var w = canvas.clientWidth;
  var h = canvas.clientHeight;

  gl.viewport(0, 0, w, h);

  var fovy = 85.0; // degrees
  var aspect = w / h;

  P = perspective(fovy, aspect, near, far);
}

window.onload = init;
window.onresize = resize;