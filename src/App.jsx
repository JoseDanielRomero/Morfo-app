import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from './routes/Homepage';
import MaxillaryPage from './routes/MaxillaryPage';
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
      "initialPosition": [0, 0, 60, 43],
      "palatalPosition": [0, -30, -60, 45],
      "incisalPosition": [5, -260, 60, 11],
      "mesialPosition": [-200, 0, 10, 14],
      "distalPosition": [200, 0, -60, 14],
      "scene": [0, -91, -180]
    },
    {
      "name": "Incisivo lateral superior",
      "description": "Como el incisivo lateral complementa la función del central, las coronas guardan un notable parecido. El lateral maxilar es más pequeño en todas sus dimensiones, excepto en la longitud de la raíz. Este diente se diferencia del incisivo central en su desarrollo, que puede variar considerablemente. La forma de los incisivos maxilares laterales varía más que la de ningún otro diente en la boca, excepto el tercer molar.",
      "id": 2,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-lateral",
      "initialPosition": [20, 10, 60, 45.5],
      "palatalPosition": [-20, -30, -60, 39],
      "incisalPosition": [15, -260, 60, 11],
      "mesialPosition": [-200, 0, 30, 14.5],
      "distalPosition": [200, 0, -60, 14],
      "scene": [-15, -103, -200]
    },
    {
      "name": "Canino superior",
      "description": "El perfil de las caras vestibular y lingual contiene una serie de curvas y arcos, excepto el ángulo que existe en la punta de la cúspide. Esta cúspide tiene una cresta mesial incisal, y otra incisal distal. La mitad mesial de la corona contacta con el incisivo lateral, y la mitad distal, con el primer premolar. Por ello, las áreas de contacto están a distintos niveles cervicoincisalmente.",
      "id": 3,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-canine",
      "initialPosition": [30, -10, 60, 42],
      "palatalPosition": [-35, -30, -60, 36],
      "incisalPosition": [35, -260, 40, 11],
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
      "initialPosition": [160, 20, 60, 16],
      "palatalPosition": [-190, -10, -60, 14],
      "incisalPosition": [35, -260, 10, 10.5],
      "mesialPosition": [-50, -30, 120, 20],
      "distalPosition": [50, -30, -120, 20.5],
      "scene": [-41, -99.5, -165]
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
    },
    {
      "name": "Tercer molar superior",
      "description": "Éste aparece en muchas ocasiones como una anomalía del desarrollo, y varía considerablemente en tamaño, contorno y posición relativa con los otros dientes. Rara vez está tan bien desarrollado como el segundo molar maxilar con el cual mantiene cierta semejanza. El tercer molar complementa la función del segundo molar y su diseño fundamental es similar.",
      "id": 8,
      "arch": "maxillary",
      "type": "posterior",
      "folderName": "maxillary-third-molar",
      "initialPosition": [150, 20, 40, 32],
      "palatalPosition": [-125, 20, -40, 43],
      "incisalPosition": [22, -970, 4, 5.5],
      "mesialPosition": [-50, 0, 120, 41],
      "distalPosition": [40, -10, -120, 41],
      "scene": [-150, -240, -110]
    },
    {
      "name": "Incisivo central inferior",
      "description": "Generalmente, el incisivo central mandibular es el diente más pequeño de la arcada. La corona es algo mayor que la mitad del incisivo central maxilar en sentido mesiodistal; sin embargo, el diámetro vestibulolingual es solamente 1 mm menor. Este refuerzo es necesario porque las líneas principales de las fuerzas masticatorias actúan sobre los incisivos mandibulares en dirección vestibulolingual.",
      "id": 9,
      "arch": "mandibular",
      "type": "anterior",
      "folderName": "mandibular-central",
      "initialPosition": [30, 0, 80, 34],
      "palatalPosition": [-15, 50, -60, 36],
      "incisalPosition": [13, 120, 40, 24],
      "mesialPosition": [-200, 0, 90, 13.5],
      "distalPosition": [200, 0, -90, 13.5],
      "scene": [-11, -59, -170]
    },
    {
      "name": "Incisivo lateral inferior",
      "description": "Este diente es el segundo incisivo a partir de la línea media mandibular a derecha e izquierda. Se parece tanto al incisivo central que sólo describiremos brevemente sus características, pues se puede comparar directamente con el incisivo central y resaltar sus diferencias. Los dos incisivos funcionan en la arcada dental como un conjunto; por ello, su forma funcional es similar. Como en el incisivo central, el incisivo lateral es uniforme si se compara con otros dientes.",
      "id": 10,
      "arch": "mandibular",
      "type": "anterior",
      "folderName": "mandibular-lateral",
      "initialPosition": [0, -50, 120, 23],
      "palatalPosition": [-5, 50, -80, 33],
      "incisalPosition": [0, 120, 40, 24],
      "mesialPosition": [-200, 10, 50, 14],
      "distalPosition": [200, 10, -50, 14.5],
      "scene": [1, -53, -165]
    },
    {
      "name": "Canino inferior",
      "description": "Como los caninos maxilar y mandibular guardan un estrecho parecido, al describir el canino mandibular se pueden establecer comparaciones directas con el canino maxilar. La corona del canino mandibular es más estrecha mesiodistalmente que la del canino maxilar, aunque en muchos casos es de la misma longitud y, a veces, de 0,5 a 1 mm mayor. La raíz puede ser tan larga como la del canino maxilar, aunque normalmente es algo más corta.",
      "id": 11,
      "arch": "mandibular",
      "type": "anterior",
      "folderName": "mandibular-canine",
      "initialPosition": [70, 10, 120, 21],
      "palatalPosition": [-55, 50, -80, 26],
      "incisalPosition": [30, 270, 40, 11],
      "mesialPosition": [-200, 10, 220, 10],
      "distalPosition": [200, 10, -180, 11],
      "scene": [-20, -47.5, -135]
    },
    {
      "name": "Primer premolar inferior",
      "description": "Es el cuarto diente a partir de la línea media, y el primer diente posterior de la mandíbula. Las particularidades que lo asemejan al canino mandibular son las siguientes: La cúspide vestibular es larga y puntiaguda y es la única que ocluye. / El diámetro vestibulolingual es semejante al del canino. 3. Las superficie oclusal desciende marcadamente hacia lingual y cervical. / La cresta de la cúspide mesiovestibular es más corta que la de la distovestibular. / El perfil de la cara oclusal se parece al de la cara incisal del canino.",
      "id": 12,
      "arch": "mandibular",
      "type": "posterior",
      "folderName": "mandibular-first-premolar",
      "initialPosition": [100, 10, 120, 18],
      "palatalPosition": [-95, 30, -80, 22],
      "incisalPosition": [40, 300, 40, 9.5],
      "mesialPosition": [-200, 10, 220, 10],
      "distalPosition": [200, 10, -180, 11],
      "scene": [-35, -50, -135]
    },
    {
      "name": "Segundo premolar inferior",
      "description": "Se parece al primero solamente por su cara vestibular. La cúspide vestibular no es tan pronunciada, pero el diámetro mesiodistal de la corona y su perfil general son semejantes. En las otras caras, el diente es mavor y está más desarrollado. Existen dos formas comunes. La primera, que probablemente es la más frecuente, es del tipo tricúspide, con aspecto más anguloso visto por su cara oclusal. La segunda forma es del tipo bicúspide, con un aspecto oclusal más redondeado.",
      "id": 13,
      "arch": "mandibular",
      "type": "posterior",
      "folderName": "mandibular-second-premolar",
      "initialPosition": [90, 10, 70, 52],
      "palatalPosition": [-95, 30, -50, 53],
      "incisalPosition": [40, 350, 20, 17],
      "mesialPosition": [-200, 10, 290, 17.5],
      "distalPosition": [200, 10, -290, 18],
      "scene": [-84, -120, -285]
    },
    {
      "name": "Primer molar inferior",
      "description": "Normalmente, es el diente más grande de la arcada inferior. Tiene cinco cúspides bien desarrolladas: dos vestibulares, dos linguales y una distal. Tiene dos raíces, una mesial y otra distal bien desarrolladas, muy anchas vestibulolingualmente, y considerablemente separadas en los ápices.",
      "id": 14,
      "arch": "mandibular",
      "type": "posterior",
      "folderName": "mandibular-first-molar",
      "initialPosition": [90, 10, 70, 52],
      "palatalPosition": [-95, 0, -50, 54.5],
      "incisalPosition": [40, 350, 20, 17],
      "mesialPosition": [-200, 10, 290, 17.5],
      "distalPosition": [200, 10, -350, 15],
      "scene": [-54, -162, -235]
    },
    {
      "name": "Segundo molar inferior",
      "description": "Normalmente, el segundo molar es más pequeño que el primero en todas sus medidas; pero solamente en décimas de milímetro. La corona tiene cuatro cúspides bien desarrolladas, dos vestibulares y dos linguales, de tamaño parecido. No se ve nunca una cúspide distal, ni quinta cúspide, pero la cúspide distovestibular es mayor que la del primer molar.",
      "id": 15,
      "arch": "mandibular",
      "type": "posterior",
      "folderName": "mandibular-second-molar",
      "initialPosition": [90, 0, 20, 61],
      "palatalPosition": [-95, 0, -20, 58.5],
      "incisalPosition": [40, 350, 5, 16.5],
      "mesialPosition": [-80, 10, 290, 19],
      "distalPosition": [30, 10, -290, 20],
      "scene": [-115, -139, -185]
    },
    {
      "name": "Tercer molar inferior",
      "description": "Varía considerablemente en los diferentes individuos y presenta muchas anomalías, tanto de forma como de posición. Complementa la función del segundo molar, y aunque rara vez está bien desarrollado, el tercer molar más habitual muestra un desarrollo irregular de la porción coronal, con raíces pequeñas más o menos malformadas. No obstante, su diseño sigue el patrón de todos los molares mandibulares quedando más cerca del segundo molar mandibular en cuanto al número de cúspides y a la forma oclusal, que del primer molar mandibular.",
      "id": 16,
      "arch": "mandibular",
      "type": "posterior",
      "folderName": "mandibular-third-molar",
      "initialPosition": [90, 10, 20, 56],
      "palatalPosition": [-95, -10, -20, 51],
      "incisalPosition": [40, 350, 10, 14.5],
      "mesialPosition": [-80, 10, 290, 17],
      "distalPosition": [70, 10, -290, 17.5],
      "scene": [-105, -172.5, -120]
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
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "La corona es más corta cervicooclusalmente, y más estrecha, mesiodistalmente, que la del segundo molar. Las raíces acostumbran a estar fusionadas funcionando como una raíz larga, son más cortas cervicoapicalmente, y acaban en un extremo cónico.",
          "id": 1
        },
        {
          "title": "PALATINO",
          "text": "Además de las diferencias mencionadas, en comparación con el segundo molar maxilar, aquí solamente existe una gran cúspide lingual y no se observa ningún surco lingual. Sin embargo, en muchos casos, se puede presentar lo contrario un tercer molar con una cúspide distolingual poco desarrollada, y con un surco de desarrollo lingual.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Aquí, junto a las diferencias de tamaño, la característica principal es la conicidad de las raíces fusionadas y la presencia de una bifurcación, generalmente en el tercio apical.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Desde esta cara se ve gran parte de la cara vestibular, y la superficie oclusal que queda a la vista es mayor que en el segundo molar debido a la mayor angulación de la cara oclusal en relación al eje mayor de la raíz. La distancia entre la línea cervical y la cresta marginal es corta.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "La cara oclusal típica del tercer molar tiene forma de corazón. La cúspide lingual es grande y está bien desarrollada, y la distolingual es pequeña o no existe con lo que el contorno del diente desde un área de contacto a la otra tiene aspecto de semicírculo. Este tipo de diente tiene tres cúspides funcionales: dos vestibulares y una lingual. La cara oclusal de este diente presenta, frecuentemente, muchos surcos suplementarios y muchos surcos accidentales, excepto si el diente está muy desgastado.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Se asemeja a un trapecio con base mayor en incisal y menor en cervical. Toda su superficie es muy homogénea, ya que casi no se observan las líneas de crecimiento ni los periquimatos.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "Esta es de forma triangular con base en incisal. Es convexa en el tercio cervical por la presencia de un pequeño cíngulo y cóncava en el tercio medio e incisal por su fosa lingual.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Tiene forma triangular con base en cervical y vértice en incisal. La superficie es ligeramente plana.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "De forma triangular con base en cervical, aplanada en los tercios medio e incisal.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "Generalmente cuando está recién erupcionado, presenta mamelones. Al entrar en contacto con los dientes antagonistas, estos mamelones se desgastan dejando un borde incisal recto con una inclinación de lingual a vestibular hacia cervical.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma trapezoidal con base en incisal. La superficie es aplanada, ligeramente convexa en cervical. No presenta líneas de desarrollo ni de imbricación (periquimatos).",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "De aspecto trapezoidal con base mayor en incisal. Es de menor tamaño que la cara labial por la convergencia de las caras proximales hacia lingual, la superficie es homogéneamente convexa en el tercio cervical por la presencia del cíngulo. El tercio medio e incisal presenta una leve concavidad en donde se localiza la fosa lingual delimitada por unas tenues crestas marginales.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "De forma triangular con base en cervical. La superficie es plana y con una concavidad en la porción centrocervical. Su perfil vestibular es curvo en el tercio cervical. El perfil lingual es ligeramente más marcado que en el incisivo central inferior pero menos que en los superiores.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "De forma triangular con base en cervical. Los tercios medio e incisal son poco convexos y el tercio cervical es cóncavo.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "Presenta en el borde una pequeña elevación en la unión entre el lóbulo central y mesial, que en ocasiones coincide con el surco interdentario entre el incisivo central y el lateral superior.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma pentagonal. Sus tercios medio y cervical son convexos y presenta 2 o 3 periquimatos en el tercio cervical, pero no tan marcados como en el canino superior. De los surcos interlobulares, el que se encuentra entre los lóbulos central y el distal es más marcado.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "De forma pentagonal, concavidad homogénea, pero convexa en el tercio cervical por la presencia del cíngulo. En el tercio medio e incisal de esta cara se encuentra la fosa lingual.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Su forma es triangular con base en cervical y vértice en incisal. Sus tercios incisal y medio son convexos y el tercio cervical, en la porción central, presenta una ligera concavidad. Su proyección coronal es lingualizada. Tanto sus convexidades como sus concavidades son menos marcadas que en el canino superior.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Su forma es triangular con base en cervical y vértice en incisal. Es más pequeña que la cara mesial, los tercios incisal y medio son más convexos que en mesial.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "El borde incisal del canino está formado por dos brazos, uno mesial corto, que provoca que la cima de la cúspide se cargue hacia este lado, y el tramo distal largo.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma pentagonal, muy parecida a la del canino, pero de menor longitud de cervical a oclusal. Todos sus ángulos son obtusos; sus tercios medio y oclusal presentan dos vertientes lisas: una mesial y otra distal, las cuales están unidas por una arista ubicada en el lóbulo central.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "Está formada por el cuarto lóbulo de crecimiento. Es una superficie pequeña, convexa y con apariencia de tubérculo.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es de forma de trapecio irregular, muy convexa en la porción ocluso vestibular, ligeramente cóncava en el tercio cervical. Desde esta cara se puede observar la inclinación de la corona hacia lingual.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Igual a la cara mesial, pero más pequeña y más convexa. Su perfil vestibular es muy curvo, llegando a formar casi un cuarto de círculo.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Es de forma circular, su cúspide vestibular ocupa 3/4 partes de la cara oclusal. En ocasiones se encuentra una cresta intercuspídea. Los surcos de la cara oclusal pueden tener tres variantes: En forma de H, en forma de U y en forma de Y.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es muy parecida en forma, al primer premolar. Sin embargo, en algunas ocasiones es un poco mayor.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "Esta cara presenta dos tipos de variantes: con dos cúspides linguales o con una cúspide casi a la misma altura que la vestibular.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es de forma trapezoidal, aplanada y de superficie mayor que el primer premolar. Su perfil oclusal no es tan inclinado debido a que la cúspide lingual es más alta.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Es muy parecida a la cara mesial, pero de mayor convexidad en el tercio oclusal.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Su contorno es de forma circular, de mayor superficie que el primer premolar. Puede presentar dos o tres cúspides. El surco fundamental puede tener tres variantes: En forma de H, en forma de U y en forma de Y.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma trapezoidal, de mayor dimensión en oclusal que en cervical. Generalmente es convexa y se encuentra dividida por el surco oclusovestibular que separa las cúspides mesiovestibular de la centrovestibular. El tercio medio y oclusal tiene gran convergencia hacia oclusal, y en este tercio oclusal es donde se encuentra el área de trabajo.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "Es de forma trapezoidal, convexa de cervical a oclusal, de menor dimensión mesiodistal. Esta cara presenta dos cúspides separadas por el surco oclusolingual que se encuentra casi en el centro de la cara.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Es una superficie de forma romboidal, ligeramente convexa.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Es más pequeña y convexa que la cara mesial. La eminencia distovestibular ocasiona que la superficie vestibular tenga convergencia hacia distal.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Esta cara es de forma de trapecio irregular. La cara oclusal presenta cinco cúspides, tres vestibulares y dos linguales, el surco fundamental, y tres surcos secundarios, una fosa central y dos fosetas triangulares.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Es de forma trapezoidal con base mayor en oclusal. La superficie es convexa, dividida por el surco oclusovestibular. Presenta dos cúspides vestibulares, la cúspide distovestibular es más ancha que la mesiovestibular.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "Muy convexa en ambos sentidos, solo que más pequeña que la del primer molar inferior. Es de forma trapezoidal con base mayor en oclusal, las caras proximales convergen hacia cervical. El surco oclusolingual separa la superficie en el tercio oclusal.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "De forma romboidal, de superficie poco convexa. El punto de contacto se encuentra equidistante de vestibular y lingual en el tercio oclusal.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Esta superficie es menor que su cara mesial. Esta cara es muy convexa de vestibular a lingual y ligeramente más plana de cervical a oclusal.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "Es de forma cuadrilátera, de mayor dimensión mesiodistal, ligeramente mayor de lado mesial que el distal. Tiene cuatro cúspides, las cuales son casi iguales en tamaño, separadas por surcos formando una cruz.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "El perfil de la corona sigue la norma general de todos los molares mandibulares. La corona es más ancha en las áreas de contacto mesiodistal que en el cuello, las cúspides vestibulares son cortas y redondeadas y la cresta del contorno mesial y distal está a una distancia un poco mayor que la mitad de la distancia entre la línea cervical y la punta de las cúspides.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "En relación con la cara vestibular, poca cosa se puede añadir al describir la cara lingual. El tercer molar mandibular, cuando está bien desarrollado, se parece ordinariamente a la forma del segundo molar, excepto en el tamaño y en el desarrollo de las raíces.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "Por esta cara, el diente se parece al segundo molar mandibular, excepto en las dimensiones. Por supuesto, las raíces son más cortas, la mesial más cónica desde el cuello hasta el ápice. Normalmente, el ápice de la raíz mesial es más puntiagudo.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "El aspecto anatómico de la mitad distal del diente es muy parecido al del segundo molar, excepto en las dimensiones.",
          "id": 4
        },
        {
          "title": "OCLUSAL",
          "text": "La cara oclusal, en los casos en que el tercer molar mandibular esté bien desarrollado, con una alineación correcta que consiga una buena oclusión, es muy parecida a la del segundo molar mandibular. Tiende a un perfil más redondeado y una distancia vestibulolingual más pequeña en la mitad distal.",
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
          <Route path='/maxillary-central' element={<TeethPage data={database[0]} surfaces={surfacesInfo[0]} />} />
          <Route path='/maxillary-lateral' element={<TeethPage data={database[1]} surfaces={surfacesInfo[1]} />} />
          <Route path='/maxillary-canine' element={<TeethPage data={database[2]} surfaces={surfacesInfo[2]} />} />
          <Route path='/maxillary-first-premolar' element={<TeethPage data={database[3]} surfaces={surfacesInfo[3]} />} />
          <Route path='/maxillary-second-premolar' element={<TeethPage data={database[4]} surfaces={surfacesInfo[4]} />} />
          <Route path='/maxillary-first-molar' element={<TeethPage data={database[5]} surfaces={surfacesInfo[5]} />} />
          <Route path='/maxillary-second-molar' element={<TeethPage data={database[6]} surfaces={surfacesInfo[6]} />} />
          <Route path='/maxillary-third-molar' element={<TeethPage data={database[7]} surfaces={surfacesInfo[7]} />} />
          <Route path='/mandibular-central' element={<TeethPage data={database[8]} surfaces={surfacesInfo[8]} />} />
          <Route path='/mandibular-lateral' element={<TeethPage data={database[9]} surfaces={surfacesInfo[9]} />} />
          <Route path='/mandibular-canine' element={<TeethPage data={database[10]} surfaces={surfacesInfo[10]} />} />
          <Route path='/mandibular-first-premolar' element={<TeethPage data={database[11]} surfaces={surfacesInfo[11]} />} />
          <Route path='/mandibular-second-premolar' element={<TeethPage data={database[12]} surfaces={surfacesInfo[12]} />} />
          <Route path='/mandibular-first-molar' element={<TeethPage data={database[13]} surfaces={surfacesInfo[13]} />} />
          <Route path='/mandibular-second-molar' element={<TeethPage data={database[14]} surfaces={surfacesInfo[14]} />} />
          <Route path='/mandibular-third-molar' element={<TeethPage data={database[15]} surfaces={surfacesInfo[15]} />} />
          <Route path='/maxillary' element={<MaxillaryPage />} />
        </Routes>
      </HashRouter>
    </PositionContext.Provider>
  );
}

export default App;
