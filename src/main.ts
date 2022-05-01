import * as THREE from 'three'
import Scene from "./scene";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Stats from 'stats.js'

const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

const width = window.innerWidth
const height = window.innerHeight

const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('app') as HTMLCanvasElement
})
renderer.setSize(width, height)

const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
camera.position.z = 5;
camera.position.x = 5;
camera.position.y = 5;

const controls = new OrbitControls(camera, renderer.domElement );
controls.update();

const scene = new Scene();
scene.initialize();

function tick() {
    requestAnimationFrame(tick)
    stats.begin();
    scene.update();
    controls.update();
    renderer.render(scene, camera)
    stats.end();
}

tick();
