import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  constructor(canvasId, actualFov) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = actualFov;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;
    this.zoom = 6;

    // NOTE: Additional components.
    this.clock = undefined;
    this.stats = undefined;
    this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize(actualPos) {

    console.log(actualPos)
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.x = actualPos[0];
    this.camera.position.y = actualPos[1];
    this.camera.position.z = actualPos[2];

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    // NOTE: Disable zoom.
    this.controls.enableZoom = false;
    this.stats = Stats();
    // NOTE: stats hidden
    // document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // directional light - right
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    this.directionalLight.position.set(500, 32, 64);
    this.scene.add(this.directionalLight);

    // directional light - left
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    this.directionalLight.position.set(-500, 32, 64);
    this.scene.add(this.directionalLight);

    // directional light - test
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1.3);
    this.directionalLight.position.set(0, -302, 64);
    this.scene.add(this.directionalLight);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.stats.update();
    this.controls.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
    // NOTE: Change background color, hex code after '0x'.
    this.renderer.setClearColor( 0x111111 )
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}