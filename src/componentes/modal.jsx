export default function Modal({children,estadoModal, cerrarModal}){
    return(
        <div className={`fondo-modal ${estadoModal&&"visible"}`}>
            <div className="modal" >
                <div className="btn-equis" onClick={cerrarModal}>
                    &times;
                </div>
                {children}
            </div>
        </div>
           
    )
}