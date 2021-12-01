
import './App.css';
import { useState } from 'react';
import Navegador from './componentes/navegador';
import Cabecera from './componentes/cabecera';
import Tabla from './componentes/tabla';

function App() {
  const [usuario, setusuario] = useState('administrador')
  const [seccion, setSeccion] = useState("clientes")

const OptenerDatosTabla = ()=>{
  let respuesta = []
  
  switch(seccion) {
    case "clientes":
      respuesta={
        "placa": ["VAD 854", "DCE 276", "MAX 678", "UHC 023", "VAD 854", "DCE 276", "MAX 678", "UHC 023"],
        "propietario": ["Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina", "Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina"],
        "fecha cita": ["13:45 3 junio", "12:30 23 agosto", "08:00 9 julio", "16:10 29 junio", "13:45 3 junio", "12:30 23 agosto", "08:00 9 julio", "16:10 29 junio"],
        "servicios": ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],       
        "comentarios": ["comenario", "comenario", "comenario", "comenario", "comenario", "comenario", "comenario", "comenario"],
        "estado": ["En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion"]
      }
      break;
    case "servicios":
      respuesta={
        "servicios": ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
        "descripción": ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
        "costo": ["200.000", "350.000", "150.000", "500.000", "280.000", "350.000", "150.000", "500.000"],
        "duración": ["2 horas", "45 minutos", "3 horas", "1 hora", "30 minutos", "2 horas", "45 minutos", "3 horas"],       
        "mecánico": ["Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina", "Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina"],
        "estado": ["En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion"]
      }
      break;
    case "usuarios":
      respuesta={
        "servicios": ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
        "descripción": ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
        "costo": ["200.000", "350.000", "150.000", "500.000", "280.000", "350.000", "150.000", "500.000"],
        "duración": ["2 horas", "45 minutos", "3 horas", "1 hora", "30 minutos", "2 horas", "45 minutos", "3 horas"],       
        "mecánico": ["Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina", "Fulano", "Pedro Perez", "Carlos manuel", "Maria Cristina"],
        "estado": ["En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion", "En reparacion"]
      }
      break;
    case "reportes":
      // code block
      break;
    default:
      // code block
  }
  return respuesta
}

  const [datosTabla, setdatosTabla] = useState()
  
  return (
    <div className="raiz">
      <Navegador setSeccion = {setSeccion} seccion ={seccion}/>
        <div className="principal">
          <Cabecera seccion ={seccion}/>
          <section className="buscador-tabla">
            <Tabla datosTabla={datosTabla}/>
          </section>
        </div>
    </div>
  );
}

export default App;
