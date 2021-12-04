import Buscador from "./tabla-buscador";
import Titulo from "./tabla-titulos";
import Datos from "./tabla-datos";

export default function Tabla({datosTabla, seccion}){

    console.log("datos tabla:",datosTabla)
    return(
        <article id="tabla-vuelos">
            <div className="pestanias">
                <a href="none">Pendientes</a>
                <a href="none">Terminados</a>
            </div>
            <div className="datos-vuelos" id="vuelos-llegados">
                <Buscador/>
                <table className="tabla" >
                    <thead>
                        <Titulo seccion ={seccion}/>  
                    </thead>
                    <tbody>
                        <Datos seccion ={seccion} datosTabla={datosTabla}/>                                
                    </tbody>                            
                </table>
                <div className="botones-finales">
                    <a href="none" className="boton" >Eliminar</a>
                    <a href="none" className="boton" >Nuevo Registro</a>
                </div>
            </div>
        </article>
    );
}