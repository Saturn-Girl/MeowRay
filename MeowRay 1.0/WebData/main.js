alert("Welcome to MeowRay 1.0");
let points = [];
let tempLine;

function addPoint(x, y, z) {
  const point = new THREE.Vector3(x, y, z);
  points.push(point);

  // Draw line if we have 2 points
  if (points.length === 2) {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line(geometry, material);
    scene.add(line);
    points = []; // reset for next line
  }
}

// On mouse click, cast ray and place point
window.addEventListener('click', (event) => {
  // Calculate mouse position
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObject(groundPlane); // add a big plane
  if (intersects.length > 0) {
    const point = intersects[0].point;
    addPoint(point.x, point.y, point.z);
  }
});

