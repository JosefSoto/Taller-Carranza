export default function Cabecera({seccion}){
    return(
        <header>
                <h1>{seccion}</h1>
                <div className="buscador">
                    <input type="search" placeholder="Buscar" className="campo-buscar"></input>
                </div>
                <div className="datos_usuarios ">
                    <div className="user">                  
                        <span>
                            <h4 id="header_username">Nombre Usuario</h4>
                            <p id="header_kind">Administrador</p>
                        </span>                    
                    </div>              
                </div>
            </header>
    )
}