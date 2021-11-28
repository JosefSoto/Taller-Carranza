export default function Navegador(){
    return(
        <nav>
            <div className="logo">
                <img src="../static/recursos/logo/LogoSantiagoVila_claro.png" alt=""></img> 
            </div> 
            <ul>
                <li><a href="none" class="btn-navegador btn-navegador-activo" id="nav-vuelos"><span>Clientes</span></a></li>
                <li><a href="none" class="btn-navegador " id="nav-aerolineas"><span>Servicios</span></a></li>
                <li><a href="none" class="btn-navegador " id="nav-pilotos"><span>Reportes</span> </a></li>
                
            </ul> 
        </nav>
    )
}