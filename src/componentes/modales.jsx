import { UseModal } from "../hooks/use-modal";
import Modal from "./modal";

export default function VentanaModal(){
    const [estadoModal1, abrirModal1, cerrarModal1]= UseModal(false)
    return (
        <Modal estadoModal={estadoModal1} cerrarModal={cerrarModal1}>
            <h2>Editar Vuelo</h2>
            <form  id="editar-vuelo">                        
                <div className="modal-1">
                    <input type="text" placeholder="Vuelo" name="vuelo" id="editar_vuelo_vuelo"></input>                            
                    <input type="text" placeholder="Destino" name="destino" id="editar_vuelo_destino"></input>
                </div>
                <div className="modal-2">
                    <select id="editar_vuelo_aerolinea" name="aerolinea" ></select>
                    <select id="editar_vuelo_avion" name="avion" ></select>
                </div>
                <div>                                
                    <input type="date" placeholder="Dia" name="dia" id="editar_vuelo_dia"></input>
                    <input type="time" placeholder="Hora" name="hora" id="editar_vuelo_hora"></input>
                </div>                        
                <div>
                    <select id="nuevoVueloEstado" name="estado">
                        <option value="A tiempo" className="estado_verde">A tiempo</option>
                        <option value="Retrasado" className="estado_naranja">Retrasado</option>
                        <option value="Aterrizó" className="estado_verde">Aterrizó</option>
                        <option value="Despego" className="estado_verde">Despego</option>
                        <option value="Cancelado" className="estado_rojo">Cancelado</option>
                        <option value="Reprogramado"className="estado_amarillo">Reprogramado</option>
                    </select>
                </div>
                <span className="botonera">
                    <input type="reset" value="Descartar" className="boton"></input>
                    <input type="submit" value="Guardar cambios" className="boton"></input>
                </span>
            </form>
        </Modal>
        
    )
}