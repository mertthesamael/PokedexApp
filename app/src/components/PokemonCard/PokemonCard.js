import PokemonName from "../Pokemon/PokemonName/PokemonName";
import PokemonType from "../Pokemon/PokemonType/PokemonType";
import "./pokemon-card.css"
import {useEffect, useState} from "react"
import axios from "axios";
import PokemonIcon from "../Pokemon/PokemonIcon/PokemonIcon";


const PokemonCard = (props) => {
    let pokemonName = props.name.charAt(0).toUpperCase() + props.name.slice(1)


    const [icon, setIcon] = useState([])

    const fetchPokemonIcon =  async (pokemon) => {
    const data = await axios(props.url).then(response=>response.data)
    setIcon(data.sprites.other.home.front_default)
    }


useEffect(()=>{
  fetchPokemonIcon()
}, []);
  
const [type, setType] = useState([])

const fetchPokemonType =  async (pokemon) => {
const data = await axios(props.url).then(response=>response.data)
setType(data.types)
}

console.log(type)
useEffect(()=>{
fetchPokemonType()
}, []);

    return (
   

        <div className="pokemon-card">
            <div className="pokemon-card-body">
                <PokemonIcon src={icon}></PokemonIcon>
            </div>
            <div className="pokemon-card-footer">
                <div className="pokemon-type-div">{type.map(x=> <PokemonType key={x.slot}type={x.type.name}/> )}</div>
                <div className="pokemon-name-div"><PokemonName name={pokemonName}></PokemonName></div>
            </div>
        </div>
   
    )

}

export default PokemonCard;