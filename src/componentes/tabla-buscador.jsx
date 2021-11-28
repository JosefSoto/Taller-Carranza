export default function Buscador(){
    return(
        <form action="none" >
            <input type="text" placeholder="Dia" id="vuelo"></input>
            <input type="text" placeholder="Servicios"></input>
            <input type="submit" value="Buscar" className="boton"></input>    
        </form>
    );
}