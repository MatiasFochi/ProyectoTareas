import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-pricipal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
