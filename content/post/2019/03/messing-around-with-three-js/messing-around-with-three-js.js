console.log("test");

const boxDiv = document.getElementById("boxEssay");
basicBox(boxDiv);
const lineDiv = document.getElementById("lineEssay");
lineEssay(lineDiv);
const orbitDiv = document.getElementById("orbitEssay");
orbitEssay(orbitDiv);

function basicBox(element) {
  var camera, scene, renderer;
  var geometry, material, mesh;

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      element.clientWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(element.clientWidth - 10, window.innerHeight - 10);
    element.appendChild(renderer.domElement);
  }

  function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    renderer.render(scene, camera);
  }
}

/**
 * For this one I'd like to do something with lines
 * https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines
 */
function lineEssay(element) {
  const renderer = new THREE.WebGLRenderer();
  const cam = new THREE.PerspectiveCamera(
    45,
    element.clientWidth / window.innerHeight,
    1,
    500
  );
  const scene = new THREE.Scene();
  renderer.setSize(element.clientWidth - 20, window.innerHeight - 20);
  element.appendChild(renderer.domElement);
  cam.position.set(0, 0, 100);
  cam.lookAt(0, 0, 0);

  const material = new THREE.LineBasicMaterial({ color: "white" });
  const geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
  geometry.vertices.push(new THREE.Vector3(0, 10, 0));
  geometry.vertices.push(new THREE.Vector3(10, 0, 0));

  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, cam);

  animateLine();

  function animateLine() {
    requestAnimationFrame(animateLine);
    line.rotation.y += 0.01;
    renderer.render(scene, cam);
  }
}

function orbitEssay(element) {
  const renderer = new THREE.WebGLRenderer();
  const cam = new THREE.PerspectiveCamera(
    45,
    element.clientWidth / window.innerHeight,
    1,
    500
  );
  const scene = new THREE.Scene();
  renderer.setSize(element.clientWidth - 20, window.innerHeight - 20);
  element.appendChild(renderer.domElement);
  cam.position.set(0, 25, 100);
  cam.lookAt(0, 0, 0);

  // const sphereGeometry = new THREE.SphereBufferGeometry(5, 64, 64);
  // const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  // const sphere = new THREE.Mesh(sphereGeometry, material);
  var geometry = new THREE.SphereBufferGeometry(5, 16, 16);
  var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  var sphere = new THREE.Mesh(geometry, material);

  scene.add(sphere);

  const curve = new THREE.EllipseCurve(0, 0, 15, 15, 0, 2 * Math.PI, false, 0);

  var points = curve.getPoints(500);
  var planetGeometry = new THREE.SphereBufferGeometry(1, 16, 16);
  var planetMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
  var planet = new THREE.Mesh(planetGeometry, planetMaterial);
  let planetPositionIndex = 0;

  scene.add(planet);

  renderer.render(scene, cam);

  animateOrbit();

  function animateOrbit() {
    requestAnimationFrame(animateOrbit);
    sphere.rotateX += 0.01;
    sphere.rotateZ += 0.01;
    planetPositionIndex =
      planetPositionIndex < points.length ? planetPositionIndex + 1 : 0;

    planet.position.setX(points[planetPositionIndex].x);
    planet.position.setZ(points[planetPositionIndex].y);
    renderer.render(scene, cam);
  }
}
