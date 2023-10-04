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
      "description": "Los incisivos centrales maxilares son los dientes más prominentes de la boca. Tienen dos formas básicas: la primera es relativamente ancha, observando el cuello desde la cara vestibular, en comparación con la anchura mesiodistal de las áreas de contacto; la segunda forma es relativamente estrecha en el cuello, en el punto de unión de la corona con la raíz, en comparación con la anchura mesiodistal de las áreas de contacto",
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

  const [actualPosition, setActualPosition] = useState([])

  return (
    <PositionContext.Provider value={{actualPosition, setActualPosition}}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/maxillary/maxillary-central' element={<MaxillaryCentral data={database[0]} />} />
        </Routes>
      </HashRouter>
    </PositionContext.Provider>
  );
}

export default App;
