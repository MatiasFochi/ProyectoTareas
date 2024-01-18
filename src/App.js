import './App.css';
import { useState } from 'react';
import ListaDeTareas from './componentes/ListaDeTareas';
import MFClaro from './imagenes/LogoPersonalBlanco2.png';
import MFOscuro from './imagenes/LogoPersonal.png';

function App() {
  
  const [darkMode,setDarkMode] = useState(false);

  const cambiarModo = () =>{
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <div className={darkMode ? "aplicacion-tareas modoOscuro" : 'aplicacion-tareas'}>
      <div className='logo-contenedor'>
        <a className='logo-contenedor-2' href="https://www.linkedin.com/in/matias-fochi/" target='_blank' rel='noreferrer'>
          <img  className='logo' src = {MFClaro} alt = 'Logo oscuro Matias Fochi' style={{opacity: darkMode ? 1 : 0, transition: 'opacity 1s'}} />
          <img  className='logo' src = {MFOscuro} alt = 'Logo oscuro Matias Fochi' style={{opacity: darkMode ? 0 : 1, transition: 'opacity 1s'}} />
        </a>
        <button className={darkMode? 'btn btn-outline-custom modoOscuro' : 'btn btn-outline-custom'} onClick={cambiarModo}>{darkMode? "Modo noche" : "Modo claro"}</button>
      </div>
      <div className='tareas-lista-pricipal'>
        <h1 className={darkMode ? "titulo-tareas modoOscuro" : 'titulo-tareas'}>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
      <div className='footer'>
        {"by "}
        <a href='https://www.linkedin.com/in/matias-fochi/' target='_blank' rel='noreferrer' className='texto-footer' >MatiasFochi</a>
      </div>
    </div>
  );
}

export default App;
