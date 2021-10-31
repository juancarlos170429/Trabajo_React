import React ,{useState}from 'react'
import './Heroe.css'
const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'
const Heroe = () => {
    const [id, setId] = useState(null)
    const [nombre, setNombre] = useState("")
    const [alineacion, setAlineacion] = useState("")
    const [genero, setGenero] = useState("")
    const [raza, setRaza] = useState("")
    const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")
    const getHeros = async () => {

        try {
          const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)          
          const hero = await response.json()
          setNombre(hero.name)
          setAlineacion(hero.biography.alignment)
          setGenero(hero.appearance.gender)
          setRaza(hero.appearance.race)
          setImg(hero.image.url)          
        } catch (error) {
          console.log('error', error)
        }
      }
    const handleChange = (e) => {
        const { target : { value } } = e
        console.log(value)
        setId(value)
      
    }  
    return (
        <div className="p_heroe_wrapper">
            <div className="p_hero_input">
                <input className="input" type="text" onChange={handleChange} placeholder="Ingrese ID del heroe"/>
                <button className="button" onClick={getHeros} >Buscar</button>
            </div>
            <br />
            <div className="p_hero_card">
                <div className="p_hero_card_info">
                    <div className="p_hero_card_info_label">
                        <h5>Nombre de heroe :</h5>
                        {nombre}
                    </div>
                    <div className="p_hero_card_info_label">
                        <h5>Alineacion :</h5>
                        {alineacion}
                    </div>
                    <div className="p_hero_card_info_label">
                        <h5>Genero : </h5>
                         {genero}
                    </div>
                    <div className="p_hero_card_info_label">
                        <h5>Raza :</h5>
                        {raza}
                    </div>
                </div>
                <img className="p_hero_card_img" src={img} alt="" />
            </div>
        </div>
    )
}

export default Heroe
