// Crear geometría personalizada
const geometry = new THREE.BufferGeometry();
// Definir los vértices del cubo
var vertices = new Float32Array([
    // Cara frontal
    -1, -1,  1,
     1, -1,  1,
     1,  1,  1,
    -1,  1,  1,
    
    // Cara posterior
    -1, -1, -1,
    -1,  1, -1,
     1,  1, -1,
     1, -1, -1,
    
    // Cara superior
    -1,  1, -1,
    -1,  1,  1,
     1,  1,  1,
     1,  1, -1,
    
    // Cara inferior
    -1, -1, -1,
     1, -1, -1,
     1, -1,  1,
    -1, -1,  1,
    
    // Cara derecha
     1, -1, -1,
     1,  1, -1,
     1,  1,  1,
     1, -1,  1,
    
    // Cara izquierda
    -1, -1, -1,
    -1, -1,  1,
    -1,  1,  1,
    -1,  1, -1,
]);

// Definir los índices de los triángulos del cubo
var indices = new Uint16Array( [
    0,  1,  2,  0,  2,  3,  // Cara frontal
    4,  5,  6,  4,  6,  7,  // Cara trasera
    8,  9, 10,  8, 10, 11,  // Cara superior
    12, 13, 14, 12, 14, 15, // Cara inferior
    16, 17, 18, 16, 18, 19, // Cara derecha
    20, 21, 22, 20, 22, 23  // Cara izquierda
] );

geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );  
geometry.setIndex(new THREE.BufferAttribute(indices, 1));

// Crear escena y agregar geometría personalizada
var scene = new THREE.Scene();
var scene = new THREE.Scene();
var cubo = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0xffffff } ) );
var cubo1 = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0x16FFFB } ) );
var cubo2 = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0xBC16FF } ) );
cubo1.translateX(-7)
cubo1.translateZ(-7)
cubo2.translateX(7)
cubo2.translateZ(7)

// Crear una luz puntual de color blanco
var light = new THREE.PointLight(0xffffff, 1);

// Establecer la posición de la luz
light.position.set(0, 10, 0);

// Crear cámara ortográfica
var width = window.innerWidth;
var height = window.innerHeight;
var aspectRatio = width / height;

var size = 5;
var cameraOrtografica = new THREE.OrthographicCamera(-size * aspectRatio, size * aspectRatio, size, -size, 0.1, 1000);
cameraOrtografica.position.set(0, 0, 15);
cameraOrtografica.lookAt(0, 0, 0);

// Añadir los cubos a la escena
scene.add(cubo, cubo1, cubo2);

// Crear renderizador y añadir a DOM
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.render(scene, cameraOrtografica);