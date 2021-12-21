export default async function verCitas() {
    try{
      const respost = await fetch('http://localhost:4001/citas/ver/')
      const respuesta = await respost.json()
      console.log(respuesta)
      return respuesta
    }catch(error){
      console.log(error)
    }
  };