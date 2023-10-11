import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from './routes/Homepage';
import TeethPage from './routes/TeethPage';

export const PositionContext = createContext([])

function App() {

  // Explained positions: [position.x, position.y, position.z, fov]
  const database = [
    {
      "name": "Incisivo central superior",
      "description": "Son los dientes más prominentes de la boca. Tienen dos formas básicas: la primera es relativamente ancha, observando el cuello desde la cara vestibular, en comparación con la anchura mesiodistal de las áreas de contacto; la segunda forma es relativamente estrecha en el cuello, en el punto de unión de la corona con la raíz, en comparación con la anchura mesiodistal de las áreas de contacto.",
      "id": 1,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-central",
      "initialPosition": [0, 0, 60, 45],
      "palatalPosition": [0, -30, -60, 45],
      "incisalPosition": [5, -260, 60, 11],
      "mesialPosition": [-200, 0, 10, 15],
      "distalPosition": [200, 0, -60, 15],
      "scene": [0, -90, -180]
    },
    {
      "name": "Incisivo lateral superior",
      "description": "Como el incisivo lateral complementa la función del central, las coronas guardan un notable parecido. El lateral maxilar es más pequeño en todas sus dimensiones, excepto en la longitud de la raíz. Este diente se diferencia del incisivo central en su desarrollo, que puede variar considerablemente. La forma de los incisivos maxilares laterales varía más que la de ningún otro diente en la boca, excepto el tercer molar.",
      "id": 2,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-lateral",
      "initialPosition": [20, 10, 60, 45],
      "palatalPosition": [-5, -30, -60, 45],
      "incisalPosition": [15, -260, 60, 11],
      "mesialPosition": [-200, 0, 30, 15],
      "distalPosition": [200, 0, -60, 15],
      "scene": [-20, -103, -200]
    },
    {
      "name": "Canino superior",
      "description": "El perfil de las caras vestibular y lingual contiene una serie de curvas y arcos, excepto el ángulo que existe en la punta de la cúspide. Esta cúspide tiene una cresta mesial incisal, y otra incisal distal. La mitad mesial de la corona contacta con el incisivo lateral, y la mitad distal, con el primer premolar. Por ello, las áreas de contacto están a distintos niveles cervicoincisalmente.",
      "id": 3,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-canine",
      "initialPosition": [30, -10, 60, 42],
      "palatalPosition": [-35, -30, -60, 38],
      "incisalPosition": [35, -260, 60, 11],
      "mesialPosition": [-200, 0, 120, 13],
      "distalPosition": [200, 0, -120, 13],
      "scene": [-27, -84, -170]
    },
    {
      "name": "Primer premolar superior",
      "description": "El primer premolar maxilar tiene dos cúspides, una vestibular y otra lingual, marcadamente definidas. La cúspide vestibular acostumbra a ser 1mm más larga que la lingual. La corona está formada por ángulos, cuyos vértices vestibulares son prominentes.",
      "id": 4,
      "arch": "maxillary",
      "type": "posterior",
      "folderName": "maxillary-first-premolar",
      "initialPosition": [160, 20, 60, 17],
      "palatalPosition": [-190, -10, -60, 14],
      "incisalPosition": [35, -260, 10, 11],
      "mesialPosition": [-50, -30, 120, 23],
      "distalPosition": [50, -30, -120, 21],
      "scene": [-41, -99, -160]
    },
    {
      "name": "Segundo premolar superior",
      "description": "El segundo premolar maxilar complementa la función del primero. Se puede establecer una comparación directa entre el primer y el segundo premolar, señalando sus variaciones. El segundo premolar maxilar es menos anguloso y da la impresión de tener la corona más redondeada en todas sus caras. Tiene una raíz única y pueden existir variaciones considerables en el tamaño de estos dos dientes, puesto que el segundo premolar no es tan constante en su forma como el primero.",
      "id": 5,
      "arch": "maxillary",
      "type": "posterior",
      "folderName": "maxillary-second-premolar",
      "initialPosition": [160, -20, 60, 16],
      "palatalPosition": [-170, -10, -60, 15],
      "incisalPosition": [22, -660, 9, 4.3],
      "mesialPosition": [-50, -20, 120, 20],
      "distalPosition": [50, -30, -120, 21],
      "scene": [-50, -105, -160]
    },
    {
      "name": "Primer molar superior",
      "description": "Normalmente, el primer molar maxilar es el diente más grande de la arcada maxilar. Tiene cuatro cúspides funcionales bien desarrolladas y una cúspide suplementaria de escasa importancia práctica. Las cuatro cúspides principales de mayor importancia fisiológica son la mesiovestibular, la distovestibular, la mesiolingual y la distolingual. La cúspide suplementaria se denomina cúspide o tubérculo de Carabelli.",
      "id": 6,
      "arch": "maxillary",
      "type": "posterior",
      "folderName": "maxillary-first-molar",
      "initialPosition": [150, -20, 60, 16],
      "palatalPosition": [-125, 20, -60, 18],
      "incisalPosition": [22, -970, 7, 2.7],
      "mesialPosition": [-50, 0, 120, 20],
      "distalPosition": [40, -10, -120, 20],
      "scene": [-48, -91, -120]
    },
    {
      "name": "Segundo molar superior",
      "description": "El segundo molar maxilar complementa la función del primer molar, y al describirlo se pueden establecer comparaciones directas con el primer molar, tanto en su forma como en su desarrollo.",
      "id": 7,
      "arch": "maxillary",
      "type": "posterior",
      "folderName": "maxillary-second-molar",
      "initialPosition": [150, -20, 60, 33],
      "palatalPosition": [-125, 20, -40, 39.5],
      "incisalPosition": [22, -970, 4, 5.5],
      "mesialPosition": [-50, 0, 120, 42],
      "distalPosition": [40, -10, -120, 42],
      "scene": [-120, -212, -210]
    }
  ]

  const surfacesInfo = [
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Presenta una superficie convexa acentuándose en el tercio cervical, con excepción de la concurrencia de los tercios medio y central donde es plana. Cuenta con dos líneas paralelas al eje longitudinal del diente, que corresponden a las líneas de crecimiento, formadas por los lóbulos de calcificación del diente. En el tercio cervical se ubican las líneas de imbricación de pickerill, periquimatos o periquematías (formadas también durante la calcificación). Corren paralelas a la línea cervical, lo cual rompe con el brillo de la superficie.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "Es de forma trapezoidal. En el centro se localiza una superficie cóncava llamada fosa central o palatina situada en el tercio medio e incisal, que corresponde al lóbulo central. En cervical está ubicado el cíngulo, talón del diente o cuarto lóbulo. Es un tubérculo de forma redondeada a veces bifurcada o trifurcada. En algunas ocasiones presenta una falla del esmalte que forma un agujero.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es de forma triangular, con base mayor en cervical y vértice en incisal. Tiene una superficie ligeramente convexa, siendo más notorio en los tercios incisal y medio.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Presenta casi la misma forma que la mesial, pero con menor dimensión y mayor convexidad.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "Es una superficie muy angosta con 1 o 2 mm de grosor, extendiéndose a lo ancho del diente. Los lóbulos de calcificación del diente forman proyecciones llamadas mamelones. Al entrar en contacto de forma natural con los dientes antagonistas, estos mamelones se desgastan dejando un borde incisal casi recto.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma trapezoidal con tendencia a triangular con base en incisal. Sólo es notable la línea de crecimiento mesial, la cual recorre únicamente el tercio incisal.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "De forma trapezoidal, más pequeña que la cara labial. Sus crestas marginales son tan voluminosas que la unión entre estas y el cíngulo crea una fosa lingual muy profunda que en ocasiones termina en un agujero y genera una complicación para la limpieza.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Tiene forma triangular con base en cervical. En esta región existe una pequeña concavidad que caracteriza este diente y con frecuencia presenta un agujero en el esmalte.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Presenta casi la misma forma que la mesial, pero con menor dimensión y mayor convexidad.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "El borde está inclinado de mesial a distal, haciendo que sus ángulos sean obtusos. La línea de crecimiento mesial (única visible), forma un pequeño surco en su borde asemejando un número '3'.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Su forma es de pentágono. El brazo mesial es corto y el distal largo (más inclinado hacia cervical). Su tercio cervical es muy estrecho, lo que le da una fuerte convexidad a toda esta área. Sobre su superficie presenta dos vertientes que le dan forma a su cúspide. Tiene dos líneas de crecimiento de la cuales la distal es muy marcada. Presenta periquimatos (paralelas a la línea cervical).",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "También es pentagonal, pero no presenta fosa palatina. Sus crestas marginales son muy gruesas y de poca altura. El cíngulo es alto, muy estrecho y de gran convexidad. En la unión de las crestas marginales y las vertientes de su lóbulo central localizamos dos depresiones de forma triangular con vértice hacia el cíngulo.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es de forma triangular, amplia y de corta altura.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "También tiene forma triangular, de menor altura que la mesial.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "Es un borde angosto donde sobresale el lóbulo central, dando la forma de cúspide. El desgaste natural de la masticación lo puede convertir en un borde plano.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma pentagonal, con aspecto parecido al canino (solo que más pequeño). El perfil oclusal tiene dos brazos simétricos y cortos más alargados que en el canino. Presenta líneas de crecimiento muy marcadas.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "La cúspide palatina está casi siempre inclinada hacia mesial y es de menor altura que la vestibular. El perfil oclusal está formado por dos brazos, de los cuales, el mesial es más corto. Su superficie es convexa en todas direcciones.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es de forma trapezoidal. En el tercio oclusal está dividida en dos porciones como consecuencia de la prolongación del surco fundamental. La porción palatina es más pequeña y convexa.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Es de forma cuadrilátera o trapezoidal. El surco fundamental casi no es visible.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Es de forma pentagonal. Está alargada en sentido vestíbulopalatatino y formada por dos cúspides. La vestibular es más grande y en forma de pirámide cuadrangular, y por otro lado, la cúspide palatina es más pequeña y de forma conoide. Las cúspides se encuentran separadas por el surco fundamental.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma pentagonal. Su superficie es más homogénea que la del primer premolar superior. En el perfil oclusal los brazos forman un ángulo más abierto que la del primer premolar y la cúspide es menos aguda.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "Es de forma pentagonal con tendencia ovoide. Su altura es casi la misma que la cúspide vestibular. Su vértice por lo general se encuentra en el centro del perfil oclusal.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Son de forma trapezoidal, de convexidad homogénea y de igual tamaño.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Son de forma trapezoidal, de convexidad homogénea y de igual tamaño.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Es de forma ovoide. Sus cúspides son casi de la misma altura y anchura, dónde el surco fundamental está ligeramente cargado hacia palatino. Este surco es muy corto mesiodistalmente, por lo que en algunas ocasiones aparenta ser un agujero, el cual se ubica en el centro de la cara oclusal.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma trapezoidal con base en oclusal, de mayor dimensión de mesial a distal y menor de cervical a oclusal. En el tercio medio y oclusal existe un surco llamado oclusovestibular, que divide a esta cara en dos, una mesial y otra distal. Generalmente se cruza con otro surco más pequeño transversal formando una pequeña cruz en el centro de esta cara generando un agujero. La cúspide mesiovestibular es ligeramente más ancha que la mesiodistal.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "Es convexa de forma trapezoidal con base en oclusal, es de menor superficie que la cara vestibular. Presenta un surco que proviene de la fosa triangular distal que divide a las cúspides mesiopalatina y distopalatina. La cúspide mesiopalatina presenenta una elevación muy prominente y obtusa, constituye aproximadamente las tres quintas partes del ancho mesiodistal de la corona. La cúspide distopalatina presenta un perfil más redondeado.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Tiene forma cuadrilátera, de mayor dimensión vestíbulopalatina. En esta cara se puede apreciar el doble perfil formado por el tubérculo de Carabelli (cuando se encuentra presente).",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Su forma geométrica es trapezoidal con base en cervical, se puede apreciar una superficie de convexidad homogénea.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Es de forma romboidal, con dos ángulos agudos en mesiovestibular y distopalatino, así como dos ángulos obtusos: en mesiopalatino y distovestibular. Las eminencias se presentan dos vestibulares y dos palatinas. A continuación se describen sus componentes: Cúspide mesiovestibular y cúspide distovestibular, Cúspide mesiopalatina, Cúspide distopalatina, Tubérculo de Carabelli, Cresta oblicua y crestas marginales, Depresiones de la cara oclusal.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Tiene forma trapezoidal con base en oclusal. En el tercio medio y oclusal se encuentra un surco llamado oclusovestibular.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "Cuando la fisonomía es de cuatro cúspides, la cara palatina tiene forma trapezoidal irregular con base en oclusal. En esta superficie se presenta un surco que viene desde oclusal hasta el tercio medio de esta cara. Cuando la fisonomía de este molar es tricúspide la superficie de la cara palatina es convexa en forma pentagonal o circular.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "De forma cuadrilátera, alargadas de vestibular a palatina y presentan una superficie aplanada y convexa más marcada en el tercio oclusal.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "De forma cuadrilátera, alargadas de vestibular a palatina y presentan una superficie aplanada y convexa más marcada en el tercio oclusal.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Puede presentar tres variantes. Las tres variantes presentan una fosa central, surcos fundamentales y fosetas triangulares profundas: Forma romboidal (Presenta cuatro cúspides, dos vestibulares y dos palatinas. Es la más frecuente.) / Forma trilobular (Presenta tres cúspides, dos vestibulares de base cuadrangular y una palatina de base triangular.) / Forma romboidal (De mayor dimensión. Las cúspides se ven más alargadas en sentido vestíbulopalatino y angostas mesiodistalmente, en comparación a la variante uno. Es la forma menos frecuente.)",
          "id": 5
        }
      ]
    }

  ]

  const [actualPosition, setActualPosition] = useState([])

  return (
    <PositionContext.Provider value={{actualPosition, setActualPosition}}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/maxillary/maxillary-central' element={<TeethPage data={database[0]} surfaces={surfacesInfo[0]} />} />
          <Route path='/maxillary/maxillary-lateral' element={<TeethPage data={database[1]} surfaces={surfacesInfo[1]} />} />
          <Route path='/maxillary/maxillary-canine' element={<TeethPage data={database[2]} surfaces={surfacesInfo[2]} />} />
          <Route path='/maxillary/maxillary-first-premolar' element={<TeethPage data={database[3]} surfaces={surfacesInfo[3]} />} />
          <Route path='/maxillary/maxillary-second-premolar' element={<TeethPage data={database[4]} surfaces={surfacesInfo[4]} />} />
          <Route path='/maxillary/maxillary-first-molar' element={<TeethPage data={database[5]} surfaces={surfacesInfo[5]} />} />
          <Route path='/maxillary/maxillary-second-molar' element={<TeethPage data={database[6]} surfaces={surfacesInfo[6]} />} />
        </Routes>
      </HashRouter>
    </PositionContext.Provider>
  );
}

export default App;
