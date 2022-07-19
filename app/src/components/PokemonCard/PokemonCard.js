import PokemonName from "../Pokemon/PokemonName/PokemonName";
import PokemonType from "../Pokemon/PokemonType/PokemonType";
import "./pokemon-card.css"
import {useEffect, useState} from "react"
import axios from "axios";
import PokemonIcon from "../Pokemon/PokemonIcon/PokemonIcon";
import PokemonNumber from "../Pokemon/PokemonNumber/PokemonNumber";


const PokemonCard = (props) => {
    


    const [icon, setIcon] = useState([])

   


useEffect(()=>{
    const fetchPokemonIcon =  async (pokemon) => {
        const data = await axios(props.url).then(response=>response.data)
        setIcon(data.sprites.other.home.front_default)
        }
fetchPokemonIcon()
}, []);
  
const [type, setType] = useState([])



useEffect(()=>{
    const fetchPokemonType =  async (pokemon) => {
        const data = await axios(props.url).then(response=>response.data)
        setType(data.types)
        }
fetchPokemonType()
}, []);



    return (
   

        <div className="pokemon-card">
            
            <div className="pokemon-card-body">
                <div className="pokemon-number-section">
            <PokemonNumber number={props.number}></PokemonNumber>
                </div>
                <PokemonIcon src={icon}></PokemonIcon>
            </div>
            <div className="pokemon-card-footer">
                <div className="pokemon-type-div">{type.map(x=> <PokemonType key={x.slot}type={x.type.name}/> )}</div>
                <div className="pokemon-name-div"><PokemonName name={props.name}></PokemonName></div>
            </div>
        </div>
   
    )

}

export default PokemonCard;