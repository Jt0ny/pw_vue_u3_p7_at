import axios from 'axios';  

 const obtenerPorId =async(id)=>{
    //http://localhost:8080/matriculaAPI/v1.1/personas/6
  const data =  axios.get(`http://localhost:8080/matriculaAPI/v1.1/persona/${id}`).then(r=>r.data);
    console.log(data);
    return data;
}

//FACHADAS
export const obtenerPorIdFachada= async(id)=>{
    return await obtenerPorId(id);
}