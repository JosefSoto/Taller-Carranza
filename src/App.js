import './App.css';
import {useState} from 'react';
import Navegador from './componentes/navegador';
import Cabecera from './componentes/cabecera';
import Tabla from './componentes/tabla';
import Login from './componentes/login';
//import verCitas from './conexion/ConectarApi'

function App() {
  const [usuario, setusuario] = useState('')
  const [seccion, setSeccion] = useState("clientes")
  const [datosTabla, setdatosTabla] = useState([])
  
  function obtenerDatosTabla(SeccionRecibida){
    switch(SeccionRecibida) {
      case "clientes":
        (async()=>{
          const respost = await fetch('http://localhost:4001/citas/ver/')
          const respuesta = await respost.json()
          console.log(respuesta)
          setdatosTabla(respuesta)
        })();
        
        /* respuesta=[
          { placas:"VAD 854", propietario:"Fulano", cita:"13:45 3 junio", servicios:"revision de frenos",comentarios:"comenario", estado:"En reparacion"},
          { placas:"DCE 276", propietario:"Pedro Perez", cita:"12:30 23 agosto", servicios:"cambio de aceite",comentarios:"comenario", estado:"En reparacion"},
          { placas:"MAX 678", propietario:"Carlos manuel", cita:"08:00 9 julio", servicios:"rotacion de llantas",comentarios:"comenario", estado:"En reparacion"},
          { placas:"UHC 023", propietario:"Maria Cristina", cita:"16:10 29 junio", servicios:"cambio de discos",comentarios:"comenario", estado:"En reparacion"},
          { placas:"VAD 854", propietario:"Fulano", cita:"13:45 3 junio", servicios:"revision de frenos",comentarios:"comenario", estado:"En reparacion"},
          { placas:"DCE 276", propietario:"Pedro Perez", cita:"12:30 23 agosto", servicios:"cambio de aceite",comentarios:"comenario", estado:"En reparacion"},
          { placas:"UHC 023", propietario:"Carlos manuel", cita:"08:00 9 julio", servicios:"rotacion de llantas",comentarios:"comenario", estado:"En reparacion"},
          { placas:"MAX 678", propietario:"Maria Cristina", cita:"16:10 29 junio", servicios:"cambio de discos",comentarios:"comenario", estado:"En reparacion"}
        ] */
        break;
      case "servicios":
        (async()=>{
          const respost = await fetch('http://localhost:4001/servicios/ver/')
          const respuesta = await respost.json()
          console.log(respuesta)
          setdatosTabla(respuesta)
        })();
        /* respuesta=[
          { servicio:"revision de frenos", descripcion:"revision de frenos", costo:"$200.000", duracion:"2 horas",mecanico:"Fulano", estado:"Disponible"},
          { servicio:"cambio de aceite", descripcion:"cambio de aceite", costo:"$150.000", duracion:"45 minutos",mecanico:"Pedro Perez", estado:"Disponible"},
          { servicio:"rotacion de llantas", descripcion:"rotacion de llantas", costo:"$80.000", duracion:"3 horas",mecanico:"Carlos manuel", estado:"Disponible"},
          { servicio:"cambio de discos", descripcion:"cambio de discos", costo:"$300.000", duracion:"1 hora",mecanico:"Maria Cristina", estado:"Disponible"},
          { servicio:"revision de frenos", descripcion:"revision de frenos", costo:"$200.000", duracion:"2 horas",mecanico:"Fulano", estado:"Disponible"},
          { servicio:"cambio de aceite", descripcion:"cambio de aceite", costo:"$150.000", duracion:"45 minutos",mecanico:"Pedro Perez", estado:"Disponible"},
          { servicio:"rotacion de llantas", descripcion:"rotacion de llantas", costo:"$80.000", duracion:"3 horas",mecanico:"Carlos manuel", estado:"Disponible"},
          { servicio:"cambio de discos", descripcion:"cambio de discos", costo:"$300.000", duracion:"1 horas",mecanico:"Maria Cristina", estado:"Disponible"}
        ] */
        break;
      case "usuarios":
        (async()=>{
          const respost = await fetch('http://localhost:4001/usuarios/ver/')
          const respuesta = await respost.json()
          console.log(respuesta)
          setdatosTabla(respuesta)
        })();
        break;
      case "reportes":
        const respuesta={
          maxServicios: ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
          minServicios: ["revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos", "revision de frenos", "cambio de aceite", "rotacion de llantas", "cambio de discos"],
          asignaciones: ["200.000", "350.000", "150.000", "500.000", "280.000", "350.000", "150.000", "500.000"],
          completados : ["2 horas", "45 minutos", "3 horas", "1 hora", "30 minutos", "2 horas", "45 minutos", "3 horas"],       
        }
        break;
      default:
        // code block
    }
  }
  obtenerDatosTabla(seccion)
  
  if (usuario === 'cico'){
    return(
      <Login usuario = {usuario} setusuario = {setusuario}/>
    )
  }else{
    return (
      <div className="raiz">
        <Navegador 
        setSeccion = {setSeccion} 
        seccion ={seccion} 
        setdatosTabla={setdatosTabla} 
        obtenerDatosTabla={obtenerDatosTabla}
        />
          <div className="principal">
            <Cabecera seccion ={seccion}/>
            <section className="buscador-tabla">
              <Tabla datosTabla={datosTabla} seccion ={seccion}/>
            </section>
          </div>
      </div>
    )
  }
}
export default App;
