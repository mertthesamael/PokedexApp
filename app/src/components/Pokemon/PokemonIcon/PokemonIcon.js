import axios from "axios";
import { useEffect, useState } from "react";
import "./icon.css"

const PokemonIcon = (props) => {
 const [icon, setIcon] = useState()
    useEffect(()=>{
        const fetchPokemonInfo =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon/"+props.pokeName).then(response=>response.data)
            setIcon(data.sprites.other.home.front_default)
         }
         fetchPokemonInfo()
     },[])
     console.log(props.poke)
    return (
        <img src={props.src?props.src:icon} className="icon"></img>
    )

}

export default PokemonIcon;