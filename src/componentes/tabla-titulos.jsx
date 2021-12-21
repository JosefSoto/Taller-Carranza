export default function Titulo({seccion}){
    
    switch(seccion) {
        case "clientes":
            return (
                <tr>
                    <th><input type="checkbox"></input></th>
                    <th>Placa</th>
                    <th>Propietario</th>
                    <th>Fecha Cita</th>
                    <th>Servicios</th>
                    <th>Comentarios</th>
                    <th>Estado</th>                                    
                </tr>
        );
        case "servicios":
            return (
                <tr>
                    <th><input type="checkbox"></input></th>
                    <th>Servicios</th>
                    <th>Descripción</th>
                    <th>Costo</th>
                    <th>Duración</th>
                    <th>Mecánico</th>
                    <th>Estado</th>                                    
                </tr>
        )
        case "usuarios":
            return (
                <tr>
                    <th><input type="checkbox"></input></th>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Tipo</th>                                   
                </tr>
        )
        case "reportes":
            return (
                <tr>
                                                      
                </tr>
        )
        default:
            // code block   
    }
        
   
   
}