import * as THREE from "three";
import * as OrbitControls from "three-orbitcontrols";

const orbitDiv = document.getElementById("orbits-essay");
orbitsEssay(orbitDiv);

function orbitsEssay(element) {
  const renderer = new THREE.WebGLRenderer();
  const cam = new THREE.PerspectiveCamera(
    45,
    element.clientWidth / window.innerHeight,
    1,
    500
  );

  const controls = getControls(cam, renderer.domElement);

  const scene = new THREE.Scene();

  renderer.setSize(element.clientWidth - 20, window.innerHeight - 20);
  element.appendChild(renderer.domElement);
  cam.position.set(0, 25, 100);
  cam.lookAt(0, 0, 0);
  const sphere = getSphereWithRadiusAndColor(5, 0xffff00);

  scene.add(sphere);

  function getSphereWithRadiusAndColor(sphereRadius, sphereColor) {
    const geometry = new THREE.SphereBufferGeometry(sphereRadius, 8, 8);
    const material = getWireframeMaterialWithColor(sphereColor);
    return new THREE.Mesh(geometry, material);
  }

  function getWireframeMaterialWithColor(color) {
    return new THREE.MeshBasicMaterial({
      color: color,
      wireframe: true
    });
  }

  var planet = getSphereWithRadiusAndColor(2, "red");
  let planetPositionIndex = 0;

  const curve = new THREE.EllipseCurve(0, 0, 15, 15, 0, 2 * Math.PI, false, 1);
  const points = curve.getPoints(500);

  scene.add(planet);

  animateOrbit();

  function animateOrbit() {
    requestAnimationFrame(animateOrbit);

    planetPositionIndex =
      planetPositionIndex < points.length ? planetPositionIndex + 1 : 0;

    planet.position.setX(points[planetPositionIndex].x);
    planet.position.setZ(points[planetPositionIndex].y);

    controls.update();

    renderer.render(scene, cam);
  }
}

function getControls(camera, element) {
  const controls = new OrbitControls(camera, element);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  return controls;
}
