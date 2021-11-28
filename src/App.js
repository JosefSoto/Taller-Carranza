
import './App.css';
import Navegador from './componentes/navegador';
import Cabecera from './componentes/cabecera';
import Tabla from './componentes/tabla';

function App() {
  return (
    <div className="raiz">
      <Navegador/>
        <div className="principal">
          <Cabecera/>
          <section class="buscador-tabla">
            <Tabla/>
          </section>
        </div>
    </div>
  );
}

export default App;
