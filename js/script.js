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

// const targets = document.querySelectorAll('.rotating-target');
// const wrapper = document.querySelector('.ball-split');

// let animationFrame;
// let angle = 0;
// let isHovered = false;

// function rotateStep() {
//   if (!isHovered) return;

//   angle += 2;
//   targets.forEach(target => {
//     target.style.transform = `rotate(${angle}deg)`;
//   });
//   animationFrame = requestAnimationFrame(rotateStep);
// }

// wrapper.addEventListener('mouseenter', () => {
//   isHovered = true;
//   cancelAnimationFrame(animationFrame);
//   targets.forEach(target => {
//     target.style.transition = 'none'; // отключаем transition во время вращения
//   });
//   rotateStep();
// });

// wrapper.addEventListener('mouseleave', () => {
//   isHovered = false;
//   cancelAnimationFrame(animationFrame);
//   targets.forEach(target => {
//     target.style.transition = 'transform 1.2s ease';
//     target.style.transform = 'rotate(0deg)';
//   });
//   angle = 0;
// });


const scene = new THREE.Scene();
scene.background = null; 
const camera = new THREE.PerspectiveCamera(75, 43.7 / 43.2, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
renderer.setSize(43.7 * 16, 43.2 * 16); 
renderer.setClearColor(0x000000, 0); 
document.body.appendChild(renderer.domElement);

const canvas = document.createElement("canvas");
canvas.width = 1024; 
canvas.height = 1024;
const context = canvas.getContext("2d");

if (!context) {
  console.error("Failed to get 2D context for canvas");
} else {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M306.071 116.339C304.418 119.371 301.868 120.887 
            298.423 120.887C296.355 120.887 294.012 120.129 291.394 
            118.613C288.775 117.097 285.537 115.512 281.678 113.858C277.819 
            112.066 273.202 110.413 267.827 108.897C262.59 107.381 256.25 
            106.623 248.808 106.623C241.917 106.623 235.785 107.45 230.41 
            109.103C225.035 110.619 220.487 112.755 216.766 115.512C213.045 
            118.268 210.219 121.507 208.29 125.228C206.36 128.811 205.396 
            132.67 205.396 136.805C205.396 141.766 207.05 146.176 210.357 
            150.035C213.803 153.756 218.282 157.202 223.794 160.371C229.445 
            163.541 235.785 166.573 242.813 169.467C249.98 172.224 257.215 
            175.187 264.519 178.357C271.962 181.389 279.197 184.696 286.226 
            188.28C293.392 191.863 299.732 196.066 305.245 200.89C310.895 
            205.576 315.374 210.951 318.682 217.014C322.127 223.078 323.85 
            230.176 323.85 238.307C323.85 249.195 321.163 258.911 315.788 
            267.456C310.413 276 301.868 282.753 290.154 287.715C297.044 
            292.539 302.626 298.258 306.898 304.873C311.171 311.351 313.307 
            319.137 313.307 328.233C313.307 337.605 311.515 346.287 307.932 
            354.281C304.487 362.136 299.387 368.958 292.634 374.747C285.881 
            380.673 277.543 385.29 267.62 388.597C257.698 391.905 246.328 
            393.559 233.511 393.559C218.764 393.559 205.396 391.216 193.406 
            386.53C181.553 381.982 171.424 376.056 163.017 368.752L171.493 
            355.108C173.56 351.524 176.799 349.733 181.209 349.733C183.689 
            349.733 186.308 350.698 189.064 352.627C191.821 354.419 195.197 
            356.417 199.194 358.622C203.328 360.827 208.359 362.894 214.285 
            364.824C220.211 366.615 227.653 367.511 236.611 367.511C250.944 
            367.511 261.97 364.479 269.688 358.415C277.543 352.214 281.471 
            344.151 281.471 334.228C281.471 328.302 279.679 323.203 276.096 
            318.931C272.651 314.52 268.034 310.662 262.245 307.354C256.595 
            303.908 250.049 300.808 242.606 298.051C235.302 295.157 227.791 
            292.263 220.073 289.369C212.493 286.475 205.051 283.305 197.747 
            279.859C190.443 276.414 183.896 272.348 178.108 267.662C172.457 
            262.977 167.84 257.602 164.257 251.538C160.812 245.336 159.089 
            237.963 159.089 229.418C159.089 218.944 162.052 209.572 167.978 
            201.303C174.042 193.034 183.552 186.488 196.506 181.664C189.616 
            176.703 183.965 170.777 179.555 163.886C175.283 156.857 173.146 
            148.381 173.146 138.458C173.146 130.603 174.8 123.161 178.108 
            116.132C181.415 108.966 186.239 102.695 192.579 97.3199C199.056 
            91.945 206.912 87.6727 216.146 84.5029C225.517 81.3331 236.198 
            79.7482 248.188 79.7482C261.97 79.7482 274.373 81.8154 285.399 
            85.95C296.562 90.0845 306.14 95.8728 314.134 103.315L306.071 
            116.339ZM191.338 223.836C191.338 228.384 192.441 232.45 194.646 
            236.033C196.989 239.479 200.09 242.717 203.949 245.749C207.808 
            248.644 212.287 251.331 217.386 253.812C222.623 256.293 228.136 
            258.773 233.924 261.254C239.85 263.597 245.845 266.009 251.909 
            268.489C258.111 270.832 264.175 273.382 270.101 276.138C277.957 
            272.693 283.538 268.489 286.846 263.528C290.154 258.429 291.807 
            252.778 291.807 246.576C291.807 239.41 289.464 233.415 284.779 
            228.591C280.231 223.63 274.305 219.22 267 215.361C259.834 211.502 
            251.84 207.919 243.02 204.611C234.2 201.303 225.586 197.651 217.179 
            193.654C207.808 197.651 201.123 202.13 197.127 207.092C193.268 211.915 
            191.338 217.497 191.338 223.836Z" fill="white" fill-opacity="0.65"/>
        </svg>
    `;

  const img = new Image();
  img.src = "data:image/svg+xml;base64," + btoa(svgString);

  img.onload = () => {
    const canvasWidthInRem = 43.7; 
    const canvasHeightInRem = 43.2; 
    const pixelsPerRemX = 1024 / canvasWidthInRem; 
    const pixelsPerRemY = 1024 / canvasHeightInRem; 
    const symbolWidthInPixels = 8 * pixelsPerRemX; 
    const symbolHeightInPixels = 12.5 * pixelsPerRemY; 

    const x = (canvas.width - symbolWidthInPixels) / 2;
    const y = (canvas.height - symbolHeightInPixels) / 2;
    context.drawImage(img, x, y, symbolWidthInPixels, symbolHeightInPixels);

    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const hasNonTransparentPixels = Array.from(imageData.data).some(
      (value) => value !== 0
    );
    if (!hasNonTransparentPixels) {
      console.error("Symbol drawing failed: Canvas appears to be empty");
    } else {
      console.log("SVG successfully drawn onto canvas");
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true; 
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.minFilter = THREE.NearestFilter; 
    texture.magFilter = THREE.NearestFilter; 

    const shiftInRem = 23; 
    const pixelsPerRem = 1024 / canvasWidthInRem; 
    const shiftInPixels = shiftInRem * pixelsPerRem; 
    const shiftInTextureUnits = shiftInPixels / 1024; 
    texture.offset.set(0.015 - shiftInTextureUnits, 0); 

    const geometry = new THREE.SphereGeometry(15, 32, 32);

    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x072c65, 
      shininess: 50,
      specular: 0xaaaaaa,
    });

    const symbolMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff, 
      alphaMap: texture, 
      transparent: true, 
      opacity: 0.65, 
      shininess: 50,
      specular: 0xaaaaaa,
      side: THREE.FrontSide,
    });

    const sphere = new THREE.Mesh(geometry, baseMaterial);
    scene.add(sphere);
    const symbolGeometry = new THREE.SphereGeometry(15.01, 32, 32); 
    const symbolSphere = new THREE.Mesh(symbolGeometry, symbolMaterial);
    scene.add(symbolSphere);
    sphere.rotation.y = Math.PI / 2; 
    symbolSphere.rotation.y = Math.PI / 2; 

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    camera.position.z = 40;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isRotating = false;
    const initialRotation = Math.PI / 2; 
    let targetRotation = initialRotation; 

    function onMouseMove(event) {

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects([sphere, symbolSphere]);
      isRotating = intersects.length > 0; 
      if (!isRotating) {
        targetRotation = initialRotation;
      }
    }
    window.addEventListener("mousemove", onMouseMove, false);

    function animate() {
      requestAnimationFrame(animate);
      if (isRotating) {
 
        sphere.rotation.y += 0.01;
        symbolSphere.rotation.y += 0.01;
        targetRotation = sphere.rotation.y; 
      } else {
        const lerpSpeed = 0.05; 
        sphere.rotation.y += (targetRotation - sphere.rotation.y) * lerpSpeed;
        symbolSphere.rotation.y +=
          (targetRotation - symbolSphere.rotation.y) * lerpSpeed;

        if (Math.abs(sphere.rotation.y - targetRotation) < 0.01) {
          sphere.rotation.y = targetRotation;
          symbolSphere.rotation.y = targetRotation;
        }
      }
      renderer.render(scene, camera);
    }
    animate();

    if (!symbolMaterial.alphaMap) {
      console.error("Texture not applied to symbol material");
    } else {
      console.log("Texture successfully applied to symbol material");
    }
  };

  img.onerror = () => {
    console.error("Failed to load SVG image");
  };
}
