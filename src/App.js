import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Titulo from './components/Titulo';
import times from './components/data/times.json';
import Footer from './components/Footer';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Titulo nome="Minha Organização:" color="#6278F7"/>
      {times.map(item => {
        return <Time 
          key={item.time} 
          nome={item.time}
          cols={colaboradores.filter(col => col.time === item.time)}
          />
      })}
      <Footer/>
    </div>
  );
}

export default App;
