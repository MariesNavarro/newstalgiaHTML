/*!
Theme: Newstalgia
Version: 1
Author: MariesNavarro
23 de Noviembre del 2018
 */
"use strict";
window.console.log("%cCoded by Maries Navarro", "color:#34408f;  font-size: 10px; background:#000; padding:20px;");
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

var container1 = _("#canvasUno"),
    container2 = _("#canvasDos"),
    container3 = _("#canvasTres"),
    container4 = _("#canvasCuatro"),
    parent = _("#canvasWr");
var wS = parent.getBoundingClientRect().width,
    hS = parent.getBoundingClientRect().height;

var scene1, camera1, renderer1, controls1;
var scene2, camera2, renderer2, controls2;
var scene3, camera3, renderer3, controls3;
var scene4, camera4, renderer4, controls4;
var fov = 45, aspect = wS/hS, near = 1, far = 1000;
var mario1, mario2, mario3, mario4;

function init(){
  scene1 = new THREE.Scene();
  scene2 = new THREE.Scene();
  scene3 = new THREE.Scene();
  scene4 = new THREE.Scene();
  camera1 = new THREE.PerspectiveCamera( fov,  aspect,  near,  far );
  camera2 = new THREE.PerspectiveCamera( fov,  aspect,  near,  far );
  camera3 = new THREE.PerspectiveCamera( fov,  aspect,  near,  far );
  camera4 = new THREE.PerspectiveCamera( fov,  aspect,  near,  far );
  camera1.position.set(0,150,400);
  camera2.position.set(0,150,400);
  camera3.position.set(0,150,400);
  camera4.position.set(0,150,400);
  camera1.lookAt(scene1.position);
  camera2.lookAt(scene2.position);
  camera3.lookAt(scene3.position);
  camera4.lookAt(scene4.position);
  scene1.add(camera1);
  scene2.add(camera2);
  scene3.add(camera3);
  scene4.add(camera4);
  renderer1 = new THREE.WebGLRenderer({antialias:true});
  renderer2 = new THREE.WebGLRenderer({antialias:true});
  renderer3 = new THREE.WebGLRenderer({antialias:true});
  renderer4 = new THREE.WebGLRenderer({antialias:true});
  renderer1.setSize(wS, hS);
  renderer2.setSize(wS, hS);
  renderer3.setSize(wS, hS);
  renderer4.setSize(wS, hS);
  container1.appendChild(renderer1.domElement);
  container2.appendChild(renderer2.domElement);
  container3.appendChild(renderer3.domElement);
  container4.appendChild(renderer4.domElement);

  controls1 = new THREE.OrbitControls( camera1, renderer1.domElement );
  controls2 = new THREE.OrbitControls( camera2, renderer2.domElement );
  controls3 = new THREE.OrbitControls( camera3, renderer3.domElement );
  controls4 = new THREE.OrbitControls( camera4, renderer4.domElement );

  //Mario
  mario1 = new THREE.Group();
  var piel1 = new THREE.JSONLoader(true);
  piel1.load('js/1/piel.js', function(geometry){
    var piel1Material = new THREE.MeshBasicMaterial( {color: 0xfcb054} );
    var piel1Mesh = new THREE.Mesh(geometry, piel1Material);
    mario1.add( piel1Mesh );
  });
  var negro1 = new THREE.JSONLoader(true);
  negro1.load('js/1/negroverde.js', function(geometry){
    var negro1Material = new THREE.MeshBasicMaterial( {color: 0x845700} );
    var negro1Mesh = new THREE.Mesh(geometry, negro1Material);
    mario1.add( negro1Mesh );
  });
  var rojo1 = new THREE.JSONLoader(true);
  rojo1.load('js/1/rojo.js', function(geometry){
    var rojo1Material = new THREE.MeshBasicMaterial( {color: 0xfc0401} );
    var rojo1Mesh = new THREE.Mesh(geometry, rojo1Material);
    mario1.add( rojo1Mesh );
  });
  //Mario 2
  mario2 = new THREE.Group();
  var cafe2 = new THREE.JSONLoader(true);
  cafe2.load('js/2/cafe.js', function(geometry){
    var cafe2Material = new THREE.MeshBasicMaterial( {color: 0x7f3300} );
    var cafe2Mesh = new THREE.Mesh(geometry, cafe2Material);
    mario2.add( cafe2Mesh );
  });
  var negro2 = new THREE.JSONLoader(true);
  negro2.load('js/2/negro.js', function(geometry){
    var negro2Material = new THREE.MeshBasicMaterial( {color: 0x1a1a1a} );
    var negro2Mesh = new THREE.Mesh(geometry, negro2Material);
    mario2.add( negro2Mesh );
  });
  var piel2 = new THREE.JSONLoader(true);
  piel2.load('js/2/piel.js', function(geometry){
    var piel2Material = new THREE.MeshBasicMaterial( {color: 0xffcd7c} );
    var piel2Mesh = new THREE.Mesh(geometry, piel2Material);
    mario2.add( piel2Mesh );
  });
  var rojo2 = new THREE.JSONLoader(true);
  rojo2.load('js/2/rojo.js', function(geometry){
    var rojo2Material = new THREE.MeshBasicMaterial( {color: 0xff2600} );
    var rojo2Mesh = new THREE.Mesh(geometry, rojo2Material);
    mario2.add( rojo2Mesh );
  });
  //Mario 3
  mario3 = new THREE.Group();
  var blanco3 = new THREE.JSONLoader(true);
  blanco3.load('js/3/blanco.js', function(geometry){
    var blanco3Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var blanco3Mesh = new THREE.Mesh(geometry, blanco3Material);
    mario3.add( blanco3Mesh );
  });
  var cafe3 = new THREE.JSONLoader(true);
  cafe3.load('js/3/cafe.js', function(geometry){
    var cafe3Material = new THREE.MeshBasicMaterial( {color: 0x64241c} );
    var cafe3Mesh = new THREE.Mesh(geometry, cafe3Material);
    mario3.add( cafe3Mesh );
  });
  var cafeclaro3 = new THREE.JSONLoader(true);
  cafeclaro3.load('js/3/cafeclaro.js', function(geometry){
    var cafeclaro3Material = new THREE.MeshBasicMaterial( {color: 0x95382a} );
    var cafeclaro3Mesh = new THREE.Mesh(geometry, cafeclaro3Material);
    mario3.add( cafeclaro3Mesh );
  });
  var marioM3 = new THREE.JSONLoader(true);
  marioM3.load('js/3/mario.js', function(geometry){
    var marioM3Material = new THREE.MeshBasicMaterial( {color: 0xff2600} );
    var marioM3Mesh = new THREE.Mesh(geometry, marioM3Material);
    mario3.add( marioM3Mesh );
  });
  var rojo3 = new THREE.JSONLoader(true);
  rojo3.load('js/3/rojo.js', function(geometry){
    var rojo3Material = new THREE.MeshBasicMaterial( {color: 0xff2600} );
    var rojo3Mesh = new THREE.Mesh(geometry, rojo3Material);
    mario3.add( rojo3Mesh );
  });
  var sombraroja3 = new THREE.JSONLoader(true);
  sombraroja3.load('js/3/sombraroja.js', function(geometry){
    var sombraroja3Material = new THREE.MeshBasicMaterial( {color: 0xc6312a} );
    var sombraroja3Mesh = new THREE.Mesh(geometry, sombraroja3Material);
    mario3.add( sombraroja3Mesh );
  });
  //Mario 4
  mario4 = new THREE.Group();
  var cafe4 = new THREE.JSONLoader(true);
  cafe4.load('js/4/cafe.js', function(geometry){
    var cafe4Material = new THREE.MeshBasicMaterial( {color: 0x64241c} );
    var cafe4Mesh = new THREE.Mesh(geometry, cafe4Material);
    mario4.add( cafe4Mesh );
  });
  var cafeclaro4 = new THREE.JSONLoader(true);
  cafeclaro4.load('js/4/cafeclaro.js', function(geometry){
    var cafeclaro4Material = new THREE.MeshBasicMaterial( {color: 0x95382a} );
    var cafeclaro4Mesh = new THREE.Mesh(geometry, cafeclaro4Material);
    mario4.add( cafeclaro4Mesh );
  });
  var googles4 = new THREE.JSONLoader(true);
  googles4.load('js/4/googles.js', function(geometry){
    var googles4Material = new THREE.MeshBasicMaterial( {color: 0x7c8d98} );
    var googles4Mesh = new THREE.Mesh(geometry, googles4Material);
    mario4.add( googles4Mesh );
  });
  var iris4 = new THREE.JSONLoader(true);
  iris4.load('js/4/iris.js', function(geometry){
    var iris4Material = new THREE.MeshBasicMaterial( {color: 0xbc416f} );
    var iris4Mesh = new THREE.Mesh(geometry, iris4Material);
    mario4.add( iris4Mesh );
  });
  var ojosblanco4 = new THREE.JSONLoader(true);
  ojosblanco4.load('js/4/ojosblanco.js', function(geometry){
    var ojosblanco4Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var ojosblanco4Mesh = new THREE.Mesh(geometry, ojosblanco4Material);
    mario4.add( ojosblanco4Mesh );
  });
  var pupilas4 = new THREE.JSONLoader(true);
  pupilas4.load('js/4/pupilas.js', function(geometry){
    var pupilas4Material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    var pupilas4Mesh = new THREE.Mesh(geometry, pupilas4Material);
    mario4.add( pupilas4Mesh );
  });
  var pupilascolor4 = new THREE.JSONLoader(true);
  pupilascolor4.load('js/4/pupilascolor.js', function(geometry){
    var pupilascolor4Material = new THREE.MeshBasicMaterial( {color: 0x000000} );
    var pupilascolor4Mesh = new THREE.Mesh(geometry, pupilascolor4Material);
    mario4.add( pupilascolor4Mesh );
  });
  var rojo4 = new THREE.JSONLoader(true);
  rojo4.load('js/4/rojo.js', function(geometry){
    var rojo4Material = new THREE.MeshBasicMaterial( {color: 0xff2600} );
    var rojo4Mesh = new THREE.Mesh(geometry, rojo4Material);
    mario4.add( rojo4Mesh );
  });
  mario1.scale.set(10,10,10);
  mario2.scale.set(10,10,10);
  mario3.scale.set(8,8,8);
  mario4.scale.set(10,10,10);
  mario1.position.set(10,-100,0);
  mario2.position.set(10,-100,0);
  mario3.position.set(10,-100,0);
  mario4.position.set(10,-100,0);
  mario1.rotation.x = THREE.Math.degToRad(-15);
  mario2.rotation.x = THREE.Math.degToRad(-15);
  mario3.rotation.x = THREE.Math.degToRad(-15);
  mario4.rotation.x = THREE.Math.degToRad(-15);
  scene1.add( mario1 );
  scene2.add( mario2 );
  scene3.add( mario3 );
  scene4.add( mario4 );
}



function render(){
  renderer1.render(scene1, camera1);
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
  renderer4.render(scene4, camera4);
  mario1.rotation.y += 0.005;
  mario2.rotation.y += 0.005;
  mario3.rotation.y += 0.005;
  mario4.rotation.y += 0.005;
}

function animate(){
  requestAnimationFrame( animate );
  render();
  controls1.update();
  controls2.update();
  controls3.update();
  controls4.update();
}
init();
animate();

function changeLevel(n, t){
var tit = _("#titulo").children[0],
    consola = _("#consola").children[0],
    puntos = _("#puntos").children[0],
    boxesP = _("#boxesP"),
    canvas = _("#canvasWr");

    puntos.setAttribute("src", "img/puntos/"+n+".png");
    consola.setAttribute("src", "img/consola/"+n+".png");
    tit.setAttribute("src", "img/tit/"+n+".png");

    function changeCanvas(n) {
      if(n == 0){
        canvas.children[0].style.display = "block";
        canvas.children[1].style.display = "none";
        canvas.children[2].style.display = "none";
        canvas.children[3].style.display = "none";

        boxesP.children[1].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[2].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[3].style.backgroundImage = "url('img/boxes/box.png')";

        boxesP.children[0].style.backgroundImage = "url('img/boxes/81.png')";
      }
      if(n == 1){
        canvas.children[0].style.display = "none";
        canvas.children[1].style.display = "block";
        canvas.children[2].style.display = "none";
        canvas.children[3].style.display = "none";

        boxesP.children[0].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[2].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[3].style.backgroundImage = "url('img/boxes/box.png')";

        boxesP.children[1].style.backgroundImage = "url('img/boxes/88.png')";
      }
      if(n == 2){
        canvas.children[0].style.display = "none";
        canvas.children[1].style.display = "none";
        canvas.children[2].style.display = "block";
        canvas.children[3].style.display = "none";

        boxesP.children[0].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[1].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[3].style.backgroundImage = "url('img/boxes/box.png')";

        boxesP.children[2].style.backgroundImage = "url('img/boxes/96.png')";
      }
      if(n == 3){
        canvas.children[0].style.display = "none";
        canvas.children[1].style.display = "none";
        canvas.children[2].style.display = "none";
        canvas.children[3].style.display = "block";

        boxesP.children[0].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[1].style.backgroundImage = "url('img/boxes/box.png')";
        boxesP.children[2].style.backgroundImage = "url('img/boxes/box.png')";

        boxesP.children[3].style.backgroundImage = "url('img/boxes/17.png')";
      }
    }
    changeCanvas(n);
}

function defaultCv(){
  var canvas = _("#canvasWr");
  canvas.children[0].style.display = "block";
  canvas.children[1].style.display = "none";
  canvas.children[2].style.display = "none";
  canvas.children[3].style.display = "none";
}
defaultCv();


//Tracker
window.addEventListener("load", function(e) {
var color = {r: 255, g: 0, b: 0};

var slider = document.getElementById("tolerance");
var canvas  = document.getElementById('canvasCam');
var context = canvas.getContext('2d');
var webcam = document.getElementById('webcam');
var swatch = document.getElementById("color");

var pipe = _("#pipe");


tracking.ColorTracker.registerColor('dynamic', function(r, g, b) {
  return getColorDistance(color, {r: r, g: g, b: b}) < slider.value
});
var tracker = new tracking.ColorTracker("dynamic");
tracker.on('track', function(e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (e.data.length !== 0) {
    e.data.forEach(function(rect) {
      drawRect(rect, context, color);
      if(rect.x > 500 && rect.y > 720){
        console.log("Ya entro al tunel");
        loadingHide();
      }

    });
  }
  context.drawImage(pipe, (canvas.width/2 - 50), (canvas.height-100), 100, 92);
});
tracking.track(webcam, tracker, { camera: true } );

webcam.addEventListener("click", function (e) {

  // Grab color from the video feed where the click occured
  var c = getColorAt(webcam, e.offsetX, e.offsetY);

  // Update target color
  color.r = c.r;
  color.g = c.g;
  color.b = c.b;

  // Update the div's background so we can see which color was selected
  swatch.style.backgroundColor = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")";
});

});

function loadingHide(){
  var wr = _("#loading");
  wr.style.opacity = "0";
  setTimeout(function(){
    wr.setAttribute("class", "dislplayNone");
  },500)
}

function getColorDistance(target, actual) {
  return Math.sqrt(
    (target.r - actual.r) * (target.r - actual.r) +
    (target.g - actual.g) * (target.g - actual.g) +
    (target.b - actual.b) * (target.b - actual.b)
  );
}

function getColorAt(webcam, x, y) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = webcam.width;
  canvas.height = webcam.height;
  context.drawImage(webcam, 0, 0, webcam.width, webcam.height);
  var pixel = context.getImageData(x, y, 1, 1).data;
  return {r: pixel[0], g: pixel[1], b: pixel[2]};
}

var marioInit = _("#marioInit");

function drawRect(rect, context, color) {
  context.strokeStyle = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
  // context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  context.drawImage(marioInit, rect.x, rect.y, rect.width, rect.width);
}
