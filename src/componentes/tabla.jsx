import Buscador from "./tabla-buscador";
import Titulo from "./tabla-titulos";
import Datos from "./tabla-datos";
import { UseModal } from "../hooks/use-modal";
import Modal from "./modal";

export default function Tabla({datosTabla, seccion}){

    const [estadoModal1, abrirModal1, cerrarModal1]= UseModal(false)
    const [estadoModalEliminar, abrirModalEliminar, cerrarModalEliminar]= UseModal(false)
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
                    <button className="boton" onClick={abrirModalEliminar}>Eliminar</button>
                    <button className="boton" onClick={abrirModal1}>Nuevo Registro</button>
                </div>
                <Modal estadoModal={estadoModal1} cerrarModal={cerrarModal1}>
                    <h2>Agendar cita</h2>
                    <form>                        
                        <div>
                            <input type="text" placeholder="Propietario" name="vuelo" id="editar_vuelo_vuelo"></input>                            
                            <input type="text" placeholder="Telefono" name="destino" id="editar_vuelo_destino"></input>
                            <input type="text" placeholder="Correo" name="correo" id="editar_vuelo_correo"></input>
                        </div>
                        <div>
                            <input type="text" placeholder="Placas" name="placas" id="editar_placas_placas"></input>                            
                            <input type="datetime" placeholder="Fecha de cita" name="fecha" id="editar_fecha"></input>
                            <select id="nuevoVueloEstado" name="estado">
                                <option value="A tiempo" className="estado_verde">A tiempo</option>
                                <option value="Retrasado" className="estado_naranja">Retrasado</option>
                            </select>
                        </div>
                        <p>Servicios:</p>
                        <div className="selectores">
                            {/* 
                            <label><input type="checkbox" value="first_checkbox"></input>Revisión de frenos</label>
                            <label><input type="checkbox" value="first_checkbox"></input>Pastillas</label>
                            <label><input type="checkbox" value="first_checkbox"></input>Discos</label>
                            <label><input type="checkbox" value="first_checkbox"></input>Amortiguadores</label>
                            <label><input type="checkbox" value="first_checkbox"></input>Cambio de aceite</label>
                            <label><input type="checkbox" value="first_checkbox"></input>Rotacion de llantas</label>
                            <label><input type="checkbox" value="first_checkbox"></input>alineación y balanceo </label>
                            <label><input type="checkbox" value="first_checkbox"></input>Revisión de frenos</label> */}
                            
                        </div>                     
                        <span className="botonera">
                            <input type="reset" value="Descartar" className="boton"></input>
                            <input type="submit" value="Guardar cambios" className="boton"></input>
                        </span>
                    </form>
                </Modal>
                <Modal estadoModal={estadoModalEliminar} cerrarModal={cerrarModalEliminar}>
                    <h2>Eliminar Cita</h2>
                    <p>
                        ¿Esta seguro que desea eliminar esta cita?
                    </p>
                    <div className="botonera">
                            <button className="boton">Cancelar</button>
                            <button className="boton">Eliminar Cita</button>
                        </div>
                </Modal>
        
            </div>
        </article>
    );
}