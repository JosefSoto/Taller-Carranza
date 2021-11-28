
import './App.css';
import Navegador from './componentes/navegador';
import Cabecera from './componentes/cabecera';

function App() {
  return (
    <div className="raiz">
      <Navegador/>
        <div className="principal">
          <Cabecera/>
        </div>
      
    </div>
  );
}

export default App;
