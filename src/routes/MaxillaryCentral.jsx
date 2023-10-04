import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../lib/SceneInit';
import TeethHeader from '../components/TeethHeader';
import { useState } from 'react';

function MaxillaryCentral({ data }) {

  const [actualPosition, setActualPosition] = useState(data.initialPosition)
  const [actualHeight, setActualHeight] = useState(window.innerHeight*(80/100))
  const [nameIncisal, setNameIncisal] = useState('')
  const [namePalatal, setNamePalatal] = useState('')

  useEffect(() => {
    if (data.arch == 'maxillary') {
      setNamePalatal('Palatino')
    } else {
      setNamePalatal('Lingual')
    }

    if (data.type == 'anterior') {
      setNameIncisal('Incisal')
    } else {
      setNameIncisal('Oclusal')
    }

  },[])

  useEffect(() => {
    // NOTE: Pass fov.
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

  window.addEventListener('resize', () => {
    setActualHeight(window.innerHeight*(80/100))
  });

  return (
    <>
      <TeethHeader />
      <section className='h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10 pt-5 pb-2 bg-[#11111] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        <button onClick={()=>handleClick(data.initialPosition)} className="h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-white">Vestibular</p>
        </button>
        <button onClick={()=>handleClick(data.palatalPosition)} className="h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-white">{namePalatal}</p>
        </button>
        <button onClick={()=>handleClick(data.incisalPosition)} className="h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-white">{nameIncisal}</p>
        </button>
        <button onClick={()=>handleClick(data.mesialPosition)} className="h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-white">Mesial</p>
        </button>
        <button onClick={()=>handleClick(data.distalPosition)} className="h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out">
          <p className="font-semibold text-lg text-white">Distal</p>
        </button>
      </section>
      <div>
        <canvas id="myThreeJsCanvas" style={{transform: 'translate(10%, 0)'}} />
      </div>
      <main className='h-[200px] w-full bg-slate-400 absolute' style={{ marginTop: actualHeight }}>

      </main>

    </>
  );
}

export default MaxillaryCentral;
