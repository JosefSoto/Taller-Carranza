import {useState} from 'react';

export const UseModal= (initial=false)=>{
    const [estadoModal, setestadoModal] = useState(initial)
    const abrirModal = ()=> setestadoModal(true);
    const cerrarModal = ()=> setestadoModal(false)
    return[estadoModal, abrirModal, cerrarModal]
}
