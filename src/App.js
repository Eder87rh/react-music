import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';

function App() {

  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Método para consultar la API de las letras de canciones
  const consultarAPILetra = (busqueda) => {
    console.log("desde el app.js", busqueda)
  }

  return (
    <Fragment>
      <Formulario
        consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  )
}

export default App;