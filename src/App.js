import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';

function App() {

  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  return (
    <Fragment>
      <Formulario/>
    </Fragment>
  )
}

export default App;