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
    }
  ]

  // "scene": [-20, -95, -200]

  const surfacesInfo = [
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "Presenta una superficie convexa acentuándose en el tercio cervical, con excepción de la concurrencia de los tercios medio y central donde es plana. Cuenta con dos líneas paralelas al eje longitudinal del diente, que corresponden a las líneas de crecimiento, formadas por los lóbulos de calcificación del diente. En el tercio cervical se ubican las líneas de imbricación de pickerill, periquimatos o periquematías (formadas también durante la calcificación). Corren paralelas a la línea cervical, lo cual rompe con el brillo de la superficie.",
          "id": 1
        },
        {
          "title": "LINGUAL",
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
          "title": "LINGUAL",
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
        </Routes>
      </HashRouter>
    </PositionContext.Provider>
  );
}

export default App;
