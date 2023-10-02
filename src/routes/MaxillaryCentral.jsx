import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../lib/SceneInit';
import TeethHeader from '../components/TeethHeader';
import { useState } from 'react';

function MaxillaryCentral({ data }) {

  const [actualPosition, setActualPosition] = useState(data.initialPosition)

  console.log(data.initialPosition)

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas', actualPosition[3]);
    test.initialize(actualPosition);
    test.animate();

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('../../assets/maxillary-central/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);

      gltfScene.scene.position.y = -90;
      gltfScene.scene.position.z = -180;

      gltfScene.scene.scale.set(50, 50, 50);
      test.scene.add(gltfScene.scene);
    });

    // const animate = () => {
    //   if (loadedModel) {
    //     // loadedModel.scene.rotation.x += 0.01;
    //     loadedModel.scene.rotation.y += 0.01;
    //     // loadedModel.scene.rotation.z += 0.01;
    //   }
    //   requestAnimationFrame(animate);
    // };
    // animate();
  }, [actualPosition]);

  const handleClick = (params) => {

    const copyParams = [...params]
    setActualPosition(copyParams)

  }

  return (
    <>
      <TeethHeader />
      <button className='h-1/3 w-1/3 bg-white' onClick={()=>handleClick(data.incisalPosition)}>Incisal</button>
      <div>
        <canvas id="myThreeJsCanvas" />
      
      </div>
      

    </>
  );
}

export default MaxillaryCentral;
