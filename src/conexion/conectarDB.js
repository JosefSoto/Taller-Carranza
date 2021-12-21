const mongoose = require('mongoose')

mongoose
.connect("mongodb+srv://grupo5:riY97ECp67:X!:P@misiontic.ckk6j.mongodb.net/carranza?retryWrites=true&w=majority")
.then(()=>console.log('conectado a la base de datos'))
.catch((error)=>console.log(error))

const citaShema = mongoose.Schema({
    placas:String,
    propietario:String,
    cita:String,
    servicios:String,
    comentarios:String,
    estado:Boolean
})
const citasModelo = mongoose.model('citas', citaShema)

const mostrar = async ()=>{
    const citas = await citasModelo.find()
    return citas
}

const crear = async ()=>{
    const cita = new citasModelo({ 
        placas:"VAD 854", 
        propietario:"Fulano", 
        cita:"13:45 3 junio", 
        servicios:"revision de frenos",
        comentarios:"comenario", 
        estado:"En reparacion"
    })
    const resultado = await cita.save() 
    console.log(resultado)
}

const actualizar= async (id)=>{
    const peticion = await citasModelo.updateOne({_id:id},
    {
        $set:{
            placas:"VAD 854", 
            propietario:"Fulano", 
            cita:"13:45 3 junio", 
            servicios:"revision de frenos",
            comentarios:"comenario", 
            estado:"En reparacion"       
        }
    })
}

const eliminar = async (id)=>{
    const peticion = await citasModelo.deleteOne({_id:id})
}

module.exports = { eliminar, actualizar, crear, mostrar }
