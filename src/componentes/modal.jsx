export default function Modal({children,estadoModal, cerrarModal}){
    return(
        <div className={`fondo-modal ${estadoModal&&"visible"}`}>
            <div className="modal" >
                <div className="btn-equis" onClick={cerrarModal}>
                    &times;
                </div>
                {children}
            </div>
            {/* <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <h2>Nuevo Vuelo</h2>
                <form  id="nuevovuelo">                        
                    <div className="modal-1">
                        <input type="text" placeholder="Vuelo" name="vuelo"></input>                            
                        <input type="text" placeholder="Destino" name="destino"></input>
                    </div>
                    <div className="modal-2">
                        <select id="nuevoVueloAerolineas" name="aerolinea"></select>
                        <select id="nuevoVueloAviones" name="avion"></select>
                    </div>
                    <div>                                
                        <input type="date" placeholder="Dia" name="dia"></input>
                        <input type="time" placeholder="Hora" name="hora"></input>
                    </div>                        
                    <div>
                        <select id="nuevoVueloEstado" name="estado">
                            <option value="atiempo" className="estado_verde">A tiempo</option>
                            <option value="retrasado" className="estado_naranja">Retrasado</option>
                            <option value="aterrizó" className="estado_verde">Aterrizó</option>
                            <option value="despego" className="estado_verde">Despego</option>
                            <option value="cancelado" className="estado_rojo">Cancelado</option>
                            <option value="reprogramado"className="estado_amarillo">Reprogramado</option>
                        </select>
                    </div>
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar" className="boton"></input>
                    </span>
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="editar-aerolinea">
                    <h2>Editar Aerolinea</h2>
                    <input type="text" placeholder="Nombre" name="nombre" id="editar_aerolinea_nombre" readonly ></input>
                    <input type="text" placeholder="Codigo" name="codigo" id="editar_aerolinea_codigo"></input>
                    <input type="text" placeholder="Aviones" name="aviones" id="editar_aerolinea_aviones"></input>
                    <input type="file" aria-label="Archivo" name="logo"></input>
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar Cambios" className="boton"></input>
                    </span>                                  
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="nuevAerolinea">
                    <h2>Nueva Aerolinea</h2>
                    <input type="text" placeholder="Nombre" name="nombre"></input>
                    <input type="text" placeholder="Codigo" name="codigo"></input>
                    <input type="text" placeholder="Aviones" name="aviones"></input>
                    <input type="file" aria-label="Archivo" name="logo"></input>
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar" className="boton"></input>
                    </span>
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="editar-pilotos">
                    <h2>Editar Piloto</h2>
                    <div>
                        <input type="text" placeholder="Nombre" name="nombre" id="editar_piloto_nombre"></input>
                        <input type="text" placeholder="Apellido" name="apellido" id="editar_piloto_apellido"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Documento" name="documento" id="editar_piloto_documento" readonly ></input>
                        <input type="tel" placeholder="Telefono" name="telefono" id="editar_piloto_telefono"></input>
                    </div>                          
                    <select name="aerolinea" id="editar_piloto_aerolinea">  
                    </select>
                    <input type="file"></input>
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar cambios" className="boton"></input>
                    </span>
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="nuevoPiloto">
                    <h2>Nuevo Piloto</h2>
                    <div>
                        <input type="text" placeholder="Nombre" name="nombre"></input>
                        <input type="text" placeholder="Apellido" name="apellido"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Documento" name="documento"></input>
                        <input type="tel" placeholder="Telefono" name="telefono"></input>
                    </div>                          
                    <select id="selectAerolinea" name="aerolinea">  
                    </select>
                    <input type="file"></input>
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar" className="boton"></input>
                    </span>
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="editar-aviones">
                    <h2>Editar Avión</h2>
                    <div className="modal-1">
                        <input type="text" placeholder="Avion" name="avion" id="editar_aviones_codigo" readonly></input>
                        <select  name="aerolinea" id="editar_aviones_aerolinea"></select>
                    </div>
                    <div className="modal-2">
                        <input type="text" placeholder="Fabricante" name="fabricante" id="editar_aviones_fabricante"></input>
                        <input type="text" placeholder="Modelo" name="modelo" id="editar_aviones_modelo"></input>                            
                    </div>
                    <input type="text" placeholder="Sillas" name="sillas" id="editar_aviones_silla"></input>                    
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar cambios" className="boton"></input>
                    </span>  
                </form>
            </div>
            <div className="modal oculto">
                <div className="btn-equis">
                    &times;
                </div>
                <form id="nuevoAvion">
                    <h2>Nuevo Avión</h2>
                    <div className="modal-1">
                        <input type="text" placeholder="Avion" name="avion"></input>
                        <select id="avionSelectAerolinea" name="aerolinea"></select>
                    </div>
                    <div className="modal-2">
                        <input type="text" placeholder="Fabricante" name="fabricante"></input>
                        <input type="text" placeholder="Modelo" name="modelo"></input>                            
                    </div>
                    <input type="text" placeholder="sillas" name = "sillas"></input>                       
                    <span className="botonera">
                        <input type="reset" value="Descartar" className="boton"></input>
                        <input type="submit" value="Guardar" className="boton"></input>
                    </span>
                </form>
            </div> */}
        </div>
           
    )
}