export default function Titulo(props){
    console.log(props)
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
}