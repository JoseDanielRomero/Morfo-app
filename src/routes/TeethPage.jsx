import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../lib/SceneInit';
import TeethHeader from '../components/TeethHeader';
import { useState } from 'react';
import bgArticle1 from '../images/Rectangle1.png'
import bgArticle2 from '../images/Rectangle2.png'
import bgArticle3 from '../images/Rectangle3.png'
import bgArticle4 from '../images/Rectangle4.png'
import bgArticle5 from '../images/Rectangle5.png'

function TeethPage({ data, surfaces }) {

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

    // NOTE: Reset position to initial.
    setActualPosition(data.initialPosition)

  },[data])

  useEffect(() => {
    // NOTE: Pass fov.
    const test = new SceneInit('myThreeJsCanvas', actualPosition[3]);
    test.initialize(actualPosition);
    test.animate();

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load(`../../assets/${data.folderName}/scene.gltf`, (gltfScene) => {
      loadedModel = gltfScene;
      console.log(loadedModel);

      gltfScene.scene.position.x = data.scene[0];
      gltfScene.scene.position.y = data.scene[1];
      gltfScene.scene.position.z = data.scene[2];

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
  }, [actualPosition, data]);

  const handleClick = (params) => {

    const copyParams = [...params]
    setActualPosition(copyParams)

  }

  window.addEventListener('resize', () => {
    setActualHeight(window.innerHeight*(80/100))
  });

  return (
    <>
      <TeethHeader
        name={data.name}
        description={data.description}
      />
      <section className='h-auto w-full lg:pl-20 lg:pr-20 pl-10 pr-10 pt-5 pb-2 bg-[#11111] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
        <button onClick={()=>handleClick(data.initialPosition)} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out'>
          <p className='font-inter font-semibold text-lg text-white'>Vestibular</p>
        </button>
        <button onClick={()=>handleClick(data.palatalPosition)} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out'>
          <p className='font-inter font-semibold text-lg text-white'>{namePalatal}</p>
        </button>
        <button onClick={()=>handleClick(data.incisalPosition)} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out'>
          <p className='font-inter font-semibold text-lg text-white'>{nameIncisal}</p>
        </button>
        <button onClick={()=>handleClick(data.mesialPosition)} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out'>
          <p className='font-inter font-semibold text-lg text-white'>Mesial</p>
        </button>
        <button onClick={()=>handleClick(data.distalPosition)} className='h-10 w-auto px-10 rounded-full bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 from-purple-600 to-pink-700 flex flex-col items-center justify-center cursor-pointer transition ease-in-out'>
          <p className='font-inter font-semibold text-lg text-white'>Distal</p>
        </button>
      </section>
      <div>
        <canvas id='myThreeJsCanvas' style={{transform: 'translate(10%, 0)'}} />
      </div>
      <main className='h-[auto] w-full bg-[#111111] absolute lg:pl-20 lg:pr-20 pl-10 pr-10' style={{ marginTop: actualHeight }}>
        <section className='h-auto w-full grid grid-cols-1 md:grid-cols-2'>
          {surfaces.infoBoxes.map((surface)=>{
            var background;
            const assignBackground = () => {
              switch (surface.id) {
                case 1:
                  background = bgArticle1;
                  break;
                case 2:
                  background = bgArticle2;
                  break;
                case 3:
                  background = bgArticle3;
                  break;
                case 4:
                  background = bgArticle4;
                  break;
                case 5:
                  background = bgArticle5;
                  break;
              }
            }
            assignBackground()

            return (
              <article key={surface.id} className='h-[auto] w-auto flex flex-col items-start justify-end bg-cover bg-center lg:bg-left-top bg-no-repeat p-8 gap-1' style={{backgroundImage: `url(${background})`}}>
                <h6 className='font-unbounded font-light text-[1.3rem] text-white'>{surface.title}</h6>
                <p className='font-inter font-normal text-[1rem] text-white leading-tight'>{surface.text}</p>
              </article>
            )
          })}
        </section>
      </main>

    </>
  );
}

export default TeethPage;
