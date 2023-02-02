const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
const geometry = new THREE.BoxGeometry( 1, 1, 4 );
const geometry3 = new THREE.BoxGeometry( 6, 6, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const material3 = new THREE.MeshBasicMaterial( { color: 0xB3B7EE } );
const cube = new THREE.Mesh( geometry, material );
const newCube = new THREE.Mesh( geometry, material );
const newCube1 = new THREE.Mesh( geometry, material );
const newCube2 = new THREE.Mesh( geometry, material );
const newCube3 = new THREE.Mesh( geometry3, material3 );


scene.add( newCube , cube , newCube1, newCube2, newCube3);




newCube.position.set(2,2, 0);
newCube1.position.set(2,-2, 0);
newCube2.position.set(3,3, 0);
newCube2.position.set(-2,2, 0);
newCube3.position.set(0,0, 0);
cube.position.set(-2,-2, 0);
window.addEventListener('wheel', function(e){
  cube.rotateX( 0.5 );
    newCube1.rotateX( 0.5 );
    newCube2.rotateX( 0.5 );
    newCube.rotateX( 0.5 );
    newCube3.rotateX( 0.5 );
})
window.addEventListener('click', function(e){
  newCube.position.set(2,2, -3);
newCube1.position.set(2,-2, 0); // socle
newCube2.position.set(3,3, 0);
newCube2.position.set(-2,2, 0);
newCube3.position.set(0,0, 0);
cube.position.set(-2,-2, 0);
})
window.addEventListener("mousemove", function(event) {
    
    var mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
  var mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
  camera.position.x = mouseX * 60;
  camera.position.y = mouseY * 60;
  camera.position.z = (Math.max(Math.abs(mouseX), Math.abs(mouseY)) * 20)+10;
  console.log( camera.position.z)
  });


camera.fov = 90;
camera.updateProjectionMatrix();

function animate() {
    requestAnimationFrame( animate );

    
    
    renderer.render( scene, camera );
  }
  animate();