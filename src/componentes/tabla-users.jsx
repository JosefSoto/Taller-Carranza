import Buscador from "./tabla-buscador";
import Titulo from "./tabla-titulos";
import Datos from "./datos-clientes";

export default function TablaCliente(){
    const titulos = [
        "Imagen",
        "Nombre",
        "Documento",
        "Teléfono",
        "Correo",
        "Tipo"
    ]
    return (
        <article id="tabla-vuelos">
            <div className="pestanias">
                <a href="none">Pendientes</a>
                <a href="none">Terminados</a>
            </div>
            <div className="datos-vuelos" id="vuelos-llegados">
                <Buscador/>
                <table className="tabla" >
                    <thead>
                        <Titulo {...titulos}/>  
                    </thead>
                    <tbody>
                        <Datos/>
                    </tbody>                            
                </table>
                <div className="botones-finales">
                    <a href="none" className="boton btn_eliminar" >Eliminar</a>
                    <a href="none" className="boton" id="nuevo-vuelo-1">Nuevo Registro</a>
                </div>
            </div>
        </article>
    );
}