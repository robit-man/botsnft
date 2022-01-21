var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );



addNote()

function randint(min, max) {
  return Math.floor(Math.random() * max) + min
}
function RGB(r, g, b) {
  function colorcheck(c) {
  if (c > 255) {
    c = 255
  }
  if (c < 0) {
    c = 0
  }
    return c
  }
  r = colorcheck(r)
  g = colorcheck(g)
  b = colorcheck(b)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "0x" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
function rgb2color(r, g, b) {
  return rgb2hex(RGB(r, g, b))
}


var color = {}
    color.r = 0
    color.g = 0
    color.b = 255
    color.rs = 0
    color.gs = 0
    color.bs = 0
    color.rt = 0
    color.gt = 0
    color.bt = 255



      //Create elements here:
var simplex = new SimplexNoise();
  function noise(x,z) {
    return simplex.noise2D( x/100, z/100 ) * 15
  }
var size = 1100,
    grid = new THREE.Geometry(),
    gMaterial = new THREE.PointsMaterial({
      color: 0x6699ff,
      size: 2
    });
var spacing = 2;
// now create the individual particles
for (var x = 0; x < size; x+=spacing) {
  for (var z = 0; z < size; z+=spacing) {
    var particle = new THREE.Vector3(x, 0, z);
    grid.vertices.push(particle);
  }
}


// create the particle system
var gridSystem = new THREE.Points(
    grid,
    gMaterial);

// add it to the scene
scene.add(gridSystem);
gridSystem.position.x = -size/2;
gridSystem.position.z = -900;

      //end of elements
			camera.position.z = 250;
camera.position.y = 150;
      camera.lookAt(new THREE.Vector3(0, 0, 0))
			var render = function () {
				requestAnimationFrame( render );
        mainloop()
				renderer.render(scene, camera);
			};
var time = 0;
function mainloop() {
  
  time += 1;
  
  
  
  
  
  if (Math.abs(color.r - color.rt) >= 5) {
      color.r += color.rs
    }
    if (Math.abs(color.g - color.gt) >= 5) {
      color.g += color.gs
    }
    if (Math.abs(color.b - color.bt) >= 5) {
      color.b += color.bs
    }
    if (Math.abs(color.r - color.rt) < 5 &&
      Math.abs(color.g - color.gt) < 5 &&
      Math.abs(color.b - color.bt) < 5) {
      color.rt = randint(0, 255)
      color.gt = randint(0, 255)
      color.bt = randint(0, 255)
      var divisor = 50
      if (color.rt > color.r) {
        color.rs = randint(5, 45) / divisor
      } else {
        color.rs = -randint(5, 45) / divisor
      }
      if (color.gt > color.g) {
        color.gs = randint(5, 45) / divisor
      } else {
        color.gs = -randint(5, 45) / divisor
      }
      if (color.bt > color.b) {
        color.bs = randint(5, 45) / divisor
      } else {
        color.bs = -randint(5, 45) / divisor
      }
    }
  
  var r = Math.round(color.r)
  var g = Math.round(color.g)
  var b = Math.round(color.b)
  
  
  
  
  
  for (var i = 0; i < gridSystem.geometry.vertices.length; i++) {
    var v = gridSystem.geometry.vertices[i];
    v.y = noise(v.x+(time/20), v.z+(time/10))
  }
  gridSystem.geometry.verticesNeedUpdate = true;
  gridSystem.material.color.setHex( rgb2color(r, g, b) );
}
			render();





window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}