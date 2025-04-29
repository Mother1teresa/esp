
$(document).ready(function () {
  // $("select").niceSelect();

  $(".header__burger").on("click", function (evt) {
    let $this = $(this);
    $(".header__menu-container").slideToggle();
  });

  $(".areas-right__item").mouseover(function () {
    const $this = $(this);
    let animeId;
    switch ($this.attr("class").split(" ")[1]) {
      case "anim-one":
        animeId = 0;
        break;
      case "anim-two":
        animeId = 1;
        break;
      case "anim-three":
        animeId = 2;
        break;
      case "anim-four":
        animeId = 3;
        break;
    }
    $(".areas-left__animation > div").each(function () {
      $(this).css("display", "none");
    });
    $(".areas-left__animation > div")[animeId].style.display = "flex";
  });
});



// window.addEventListener("DOMContentLoaded", () => {
// const scene = new THREE.Scene();
// const canvas = document.createElement("canvas");
// canvas.width = 2048; 
// canvas.height = 2048;
// const context = canvas.getContext("2d");


// if (!context) {
//   console.error("Failed to get 2D context for canvas");
// } else {
//   fetch("image/svglog.svg")
//     .then((response) => response.text())
//     .then((svgText) => {
//       const blob = new Blob([svgText], { type: "image/svg+xml" });
//       const url = URL.createObjectURL(blob);

//       const img = new Image();
//       img.onload = () => {
//         URL.revokeObjectURL(url);

//         context.drawImage(img, 0, 0, canvas.width, canvas.height);

//         // Clear the canvas
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         const pixelsPerRem = 2048 / 43; 
//         const symbolWidthInPixels = 5 * pixelsPerRem; 
//         const symbolHeightInPixels = 14 * pixelsPerRem; 

//         const x = (canvas.width - symbolWidthInPixels) / 2;
//         const y = (canvas.height - symbolHeightInPixels) / 2;
//         context.drawImage(
//           img,
//           0,
//           0,
//           img.width,
//           img.height,
//           x,
//           y,
//           symbolWidthInPixels,
//           symbolHeightInPixels
//         );
//         const newImageData = context.getImageData(
//           0,
//           0,
//           canvas.width,
//           canvas.height
//         );
//         const hasNonTransparentPixels = Array.from(newImageData.data).some(
//           (value) => value !== 0
//         );

//         if (!hasNonTransparentPixels) {
//           console.error("Symbol drawing failed: Canvas appears to be empty");
//         } else {
//           console.log("SVG successfully drawn onto canvas");
//         }
    
//         scene.background = null;

//         const camera = new THREE.PerspectiveCamera(75, 43.7 / 43.2, 0.1, 1000);
//         camera.position.z = 40;

//         const renderer = new THREE.WebGLRenderer({
//           antialias: true,
//           alpha: true,
//         });
//         const maxWidthRem = 43.7;
//         const maxHeightRem = 43.2;
//         const remToPixels = 16; 
//         const maxWidthPx = maxWidthRem * remToPixels;
//         const maxHeightPx = maxHeightRem * remToPixels;
//         const viewportWidth = Math.min(window.innerWidth, maxWidthPx);
//         const viewportHeight = Math.min(window.innerHeight, maxHeightPx);
//         renderer.setSize(viewportWidth, viewportHeight);

//         camera.aspect = viewportWidth / viewportHeight;
//         camera.updateProjectionMatrix();

//         document.body.appendChild(renderer.domElement);

//         let sphere, symbolSphere;

//         const texture = new THREE.CanvasTexture(canvas);
//         texture.needsUpdate = true;
//         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//         texture.repeat.set(1, 1);
//         texture.minFilter = THREE.LinearFilter; 
//         texture.magFilter = THREE.LinearFilter; 

//         const shiftInRem = 23;
//         const shiftInPixels = shiftInRem * pixelsPerRem;
//         const shiftInTextureUnits = shiftInPixels / 2048;
//         texture.offset.set(0.03 - shiftInTextureUnits, 0);

//         const geometry = new THREE.SphereGeometry(15, 32, 32);
//         const baseMaterial = new THREE.MeshPhongMaterial({
//           color: 0x072c65,
//           shininess: 50,
//           specular: 0xaaaaaa,
//         });

//         sphere = new THREE.Mesh(geometry, baseMaterial);
//         scene.add(sphere);

//         const symbolMaterial = new THREE.MeshPhongMaterial({
//           color: 0xffffff,
//           alphaMap: texture,
//           transparent: true,
//           opacity: 0.65,
//           shininess: 50,
//           specular: 0xaaaaaa,
//           side: THREE.FrontSide,
//         });

//         const symbolGeometry = new THREE.SphereGeometry(15.01, 32, 32);
//         symbolSphere = new THREE.Mesh(symbolGeometry, symbolMaterial);
//         scene.add(symbolSphere);

//         sphere.rotation.y = Math.PI / 2;
//         symbolSphere.rotation.y = Math.PI / 2;

//         const ambientLight = new THREE.AmbientLight(0xffffff);
//         scene.add(ambientLight);

//         const raycaster = new THREE.Raycaster();
//         const mouse = new THREE.Vector2();
//         let isRotating = false;
//         const initialRotation = Math.PI / 2;
//         let targetRotation = initialRotation;

//         function updateMousePosition(clientX, clientY) {
//           const rect = renderer.domElement.getBoundingClientRect();
//           mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
//           mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

//           raycaster.setFromCamera(mouse, camera);
//           const intersects = raycaster.intersectObjects([sphere, symbolSphere]);
//           isRotating = intersects.length > 0;
//           if (!isRotating) {
//             targetRotation = initialRotation;
//           }
//         }

//         function onMouseMove(event) {
//           updateMousePosition(event.clientX, event.clientY);
//         }

//         function onTouchMove(event) {
//           event.preventDefault();
//           const touch = event.touches[0];
//           updateMousePosition(touch.clientX, touch.clientY);
//         }

//         function onTouchStart(event) {
//           event.preventDefault();
//           const touch = event.touches[0];
//           updateMousePosition(touch.clientX, touch.clientY);
//         }

//         window.addEventListener("mousemove", onMouseMove, false);
//         window.addEventListener("touchstart", onTouchStart, false);
//         window.addEventListener("touchmove", onTouchMove, false);

//         function animate() {
//           requestAnimationFrame(animate);

//           if (isRotating) {
//             sphere.rotation.y += 0.01;
//             symbolSphere.rotation.y += 0.01;
//             targetRotation = sphere.rotation.y;
//           } else {
//             const lerpSpeed = 0.05;
//             sphere.rotation.y +=
//               (targetRotation - sphere.rotation.y) * lerpSpeed;
//             symbolSphere.rotation.y +=
//               (targetRotation - symbolSphere.rotation.y) * lerpSpeed;

//             if (Math.abs(sphere.rotation.y - targetRotation) < 0.01) {
//               sphere.rotation.y = targetRotation;
//               symbolSphere.rotation.y = targetRotation;
//             }
//           }

//           renderer.render(scene, camera);
//         }

//         animate();

//         if (!symbolMaterial.alphaMap) {
//           console.error("Texture not applied to symbol material");
//         } else {
//           console.log("Texture successfully applied to symbol material");
//         }
//       };

//       img.onerror = () => {
//         console.error("Failed to load external SVG image");
//       };

//       img.src = url;
//     })
//     .catch((error) => {
//       console.error("Error loading SVG file:", error);
//     });
// }
// });

  // Time-based rotation
  let lastTime = performance.now();
  const baseRotationSpeed = 1.5; // Slower when front is facing (radians per second)
  const maxRotationSpeed = 2.0; // Much faster when back is facing (radians per second)
function animate() {
  requestAnimationFrame(animate);

  // Calculate deltaTime
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
  lastTime = currentTime;

  if (isRotating) {
      // Normalize rotation.y to [0, 2π) for consistent comparison
      const normalizedRotation = sphere.rotation.y % (2 * Math.PI);
      // Calculate how close the sphere is to facing backward (rotation.y ≈ 3π/2)
      const backFacingAngle = 3.5 * Math.PI / 2;
      const angleDiff = Math.abs(((normalizedRotation - backFacingAngle) + 2 * Math.PI) % (2 * Math.PI) - Math.PI);
      // Apply a sharper speed curve (using a power function) to focus the speed-up
      const speedFactor = Math.pow(1 - (angleDiff / Math.PI), 2); // Square the factor for a sharper curve
      const rotationSpeed = baseRotationSpeed + (maxRotationSpeed - baseRotationSpeed) * speedFactor;

      // Apply time-based rotation
      sphere.rotation.y += rotationSpeed * deltaTime;
      symbolSphere.rotation.y += rotationSpeed * deltaTime;
      targetRotation = sphere.rotation.y;
  } else {
      // Smooth lerping back to initial rotation
      const lerpSpeed = 0.1;
      sphere.rotation.y += (targetRotation - sphere.rotation.y) * lerpSpeed * deltaTime * 60;
      symbolSphere.rotation.y += (targetRotation - symbolSphere.rotation.y) * lerpSpeed * deltaTime * 60;
  }

  renderer.render(scene, camera);
}