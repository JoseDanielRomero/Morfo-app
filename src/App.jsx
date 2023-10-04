import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Homepage from './routes/Homepage';
import MaxillaryCentral from './routes/MaxillaryCentral';

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
      "distalPosition": [200, 0, -60, 15]
    },
    {
      "name": "Incisivo lateral superior",
      "description": "Los incisivos centrales maxilares son los dientes más prominentes de la boca. Tienen dos formas básicas: la primera es relativamente ancha, observando el cuello desde la cara vestibular, en comparación con la anchura mesiodistal de las áreas de contacto; la segunda forma es relativamente estrecha en el cuello, en el punto de unión de la corona con la raíz, en comparación con la anchura mesiodistal de las áreas de contacto",
      "id": 2,
      "arch": "maxillary",
      "type": "anterior",
      "folderName": "maxillary-central",
      "initialPosition": [0, 0, 60, 45],
      "palatalPosition": [0, -30, -60, 45],
      "incisalPosition": [5, -260, 60, 11],
      "mesialPosition": [-200, 0, 10, 15],
      "distalPosition": [200, 0, -60, 15]
    }
  ]

  const surfacesInfo = [
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "La corona promedio del incisivo central tiene de 10 a 11 mm de longitud, medida desde el punto más alto de la línea cervical hasta el punto más bajo del borde incisal. La distancia mesiodistal tiene una amplitud de 8 a 9 mm en las áreas de contacto. Las crestas de la curvatura mesial y distal de la corona representan las áreas en las que el incisivo central contacta con sus vecinos. Cualquier cambio en la posición del contorno de esta cresta afecta al nivel del área de contacto.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "El perfil lingual del incisivo central maxilar es la imagen especular de la cara vestibular. La cara lingual de la corona es diferente, sin embargo, comparada con la superficie de la cara vestibular. En ésta, la superficie de la corona es generalmente lisa; la cara lingual tiene convexidades y una concavidad. El perfil de la línea cervical es similar, pero inmediatamente por debajo de la línea cervical aparece una ligera convexidad, llamada cingulo.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "La cara mesial de este diente tiene la forma típica de un incisivo. La corona tiene forma de cuña o de triángulo con la base en el cuello y el vértice en el borde incisal.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Existen pocas diferencias entre la cara mesial y la distal. Cuando se observa un incisivo central desde su cara distal, da la impresión de que la corona es más gruesa hacia el borde incisal. Debido a la inclinación de la superficie vestibular distolingualmente, parte de esta superficie se puede ver desde la cara distal; esto crea la ilusión de mayor espesor.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "La corona de este diente se ve más abultada desde esta cara de lo que podría esperarse de su visión por la cara mesial y distal. En las áreas de contacto mesial y distal las superficies son relativamente anchas. Se pueden comparar también las medidas de la corona vestibulolingual y mesiodistalmente.",
          "id": 5
        }
      ]
    },
    {
      "infoBoxes": [
        {
          "title": "VESTIBULAR",
          "text": "La corona promedio del incisivo central tiene de 10 a 11 mm de longitud, medida desde el punto más alto de la línea cervical hasta el punto más bajo del borde incisal. La distancia mesiodistal tiene una amplitud de 8 a 9 mm en las áreas de contacto. Las crestas de la curvatura mesial y distal de la corona representan las áreas en las que el incisivo central contacta con sus vecinos. Cualquier cambio en la posición del contorno de esta cresta afecta al nivel del área de contacto.",
          "id": 1
        },
        {
          "title": "LINGUAL",
          "text": "El perfil lingual del incisivo central maxilar es la imagen especular de la cara vestibular. La cara lingual de la corona es diferente, sin embargo, comparada con la superficie de la cara vestibular. En ésta, la superficie de la corona es generalmente lisa; la cara lingual tiene convexidades y una concavidad. El perfil de la línea cervical es similar, pero inmediatamente por debajo de la línea cervical aparece una ligera convexidad, llamada cingulo.",
          "id": 2
        },
        {
          "title": "MESIAL",
          "text": "La cara mesial de este diente tiene la forma típica de un incisivo. La corona tiene forma de cuña o de triángulo con la base en el cuello y el vértice en el borde incisal.",
          "id": 3
        },
        {
          "title": "DISTAL",
          "text": "Existen pocas diferencias entre la cara mesial y la distal. Cuando se observa un incisivo central desde su cara distal, da la impresión de que la corona es más gruesa hacia el borde incisal. Debido a la inclinación de la superficie vestibular distolingualmente, parte de esta superficie se puede ver desde la cara distal; esto crea la ilusión de mayor espesor.",
          "id": 4
        },
        {
          "title": "INCISAL",
          "text": "La corona de este diente se ve más abultada desde esta cara de lo que podría esperarse de su visión por la cara mesial y distal. En las áreas de contacto mesial y distal las superficies son relativamente anchas. Se pueden comparar también las medidas de la corona vestibulolingual y mesiodistalmente.",
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
          <Route path='/maxillary/maxillary-central' element={<MaxillaryCentral data={database[0]} surfaces={surfacesInfo[0]} />} />
        </Routes>
      </HashRouter>
    </PositionContext.Provider>
  );
}

export default App;
