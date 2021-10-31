import React,{useState,useEffect} from 'react'
import './Persona.css'
const url="https://randomuser.me/api/"
const Persona = () => {
    const [nombres, setNombres] = useState("")
    const [foto, setFoto] = useState("")
    const [genero, setGenero] = useState("")
    const [edad, setEdad] = useState("")
    const [correo, setCorreo] = useState("")
    const getPersona = async () => {
        try {
          const response = await fetch(`${url}`)          
          const persona = await response.json()
          setNombres(`${persona.results[0].name.first} ${persona.results[0].name.last}`)
          setFoto(persona.results[0].picture.large)
          setGenero(persona.results[0].gender)
          setEdad(persona.results[0].dob.age)
          setCorreo(persona.results[0].email)          
        } catch (error) {
          console.log('error', error)
        }
      }
    useEffect(()=>{
        getPersona();
    },[])
    return (
        <div className="p_persona_wrapper">
            <div className="p_persona_card">
                <h1>Persona</h1>
                <div>
                {nombres}
                </div>
               <img src={foto} alt="" />
                <div>
                
                {genero}
                </div>
                <div>{edad}</div>
                <div>
                {correo}
                </div>
            </div>
        </div>
    )
}

export default Persona
