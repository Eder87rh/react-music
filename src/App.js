import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';

function App() {

  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Método para consultar la API de las letras de canciones
  const consultarAPILetra = async (busqueda) => {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    // consultar la api
    const resultado = await axios(url);

    // almacenar la letra en el state
    agregarLetra(resultado.data.lyrics);
  }

  return (
    <Fragment>
      <Formulario
        consultarAPILetra={consultarAPILetra}
      />
      <div className="container mt-5">
        <div className="col md-6">

        </div>
        <div className="col md-6">
          <Cancion
            letra={letra}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default App;