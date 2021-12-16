export default function Datos({seccion, datosTabla}){
    console.log(datosTabla)
    console.log(seccion)
    
    switch(seccion) {
        case "clientes":
            return (
                <>
                    {datosTabla.map(celda=>(
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td>{celda.placas}</td>
                            <td>{celda.propietario}</td>
                            <td>{celda.cita}</td>
                            <td>{celda.servicios}</td>
                            <td>{celda.comentarios}</td>
                            <td>{celda.estado}</td>                                    
                        </tr>
                    ))}
                </>
            );
        case "servicios":
            return (
                <>
                    {datosTabla.map(celda=>(
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td>{celda.servicio}</td>
                            <td>{celda.descripcion}</td>
                            <td>{celda.costo}</td>
                            <td>{celda.duracion}</td>
                            <td>{celda.mecanico}</td>
                            <td>{celda.estado}</td>                                    
                        </tr>
                    ))}
                </>
            )
        case "usuarios":
            return (
                <tr>
                    <th><input type="checkbox"></input></th>
                    <th>Nombre</th>
                    <th>apellido</th>
                    <th>Fecha Cita</th>
                    <th>Servicios</th>
                    <th>Comentarios</th>
                    <th>Estado</th>                                    
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