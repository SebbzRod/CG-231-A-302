//CREACION DE LA GEOMETRIUA CON EL METODO THREE.BufferGeometr
var geometry = new THREE.BufferGeometry();
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

// Crear escena y los cubos generados
var scene = new THREE.Scene();
var cubo = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0xffffff } ) );
var cubo1 = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0x16FFFB } ) );
var cubo2 = new THREE.Mesh( geometry, new THREE.LineBasicMaterial ( { color: 0xBC16FF } ) );
cubo1.translateX(-7)
cubo1.translateZ(-7)
cubo2.translateX(7)
cubo2.translateZ(7)


// Crear cámara de perspectiva y posicionarla
var cameraPerspectiva = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
cameraPerspectiva.position.z = 15;
cameraPerspectiva.position.x = 1;

// Añadir los cubos a la escena
scene.add(cubo, cubo1, cubo2);

// Crear renderizador y añadir a DOM
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.render( scene, cameraPerspectiva );
