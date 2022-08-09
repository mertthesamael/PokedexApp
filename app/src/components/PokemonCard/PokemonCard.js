import PokemonName from "../Pokemon/PokemonName/PokemonName";
import PokemonType from "../Pokemon/PokemonType/PokemonType";
import "./pokemon-card.css"
import {useEffect, useState} from "react"
import axios from "axios";
import PokemonIcon from "../Pokemon/PokemonIcon/PokemonIcon";
import PokemonNumber from "../Pokemon/PokemonNumber/PokemonNumber";
import {NavLink} from "react-router-dom"
import { star,starEmpty } from "../store/context";


const PokemonCard = (props) => {
    


    const [icon, setIcon] = useState([])

   
useEffect(()=>{
    const fetchPokemonIcon =  async (pokemon) => {
        const data = await axios(props.url).then(response=>response.data)
        setIcon(data.sprites.other['official-artwork'].front_default)
        }
fetchPokemonIcon()
}, [props.url]);
  
const [type, setType] = useState([])



useEffect(()=>{
    const fetchPokemonType =  async (pokemon) => {
        const data = await axios(props.url).then(response=>response.data)
        setType(data.types)
        }
fetchPokemonType()
}, [props.url]);


function getFavorite (event) {
    event.preventDefault()
const favInfo = {
    name: props.name,
    image: event.target.parentElement.querySelector('.iconn').src,
    number:event.target.parentElement.querySelector('.pokemon-number').innerHTML
}
setIsFavorite(!isFavorite)
return props.getFavorite(favInfo)
}
const [isFavorite, setIsFavorite] = useState(false)
let favoriteButton =starEmpty()
let favClass = " "
if ( isFavorite === true){
    favClass="fav-active"
}

JSON.parse(localStorage?.getItem('fav'))?.map(x=> x.name === props.name ? favoriteButton=star():"")



    return (
   
        <div className="pokemon-card">
            <div onClick={getFavorite} className={"fav-icon "+favClass}>{favoriteButton}</div>
            <div className="pokemon-card-body">

            <div className="pokemon-card-header">

                <div className="pokemon-name-number">

                    <PokemonNumber number={props.number} />
                    <NavLink to={"/"+props.name} className="pokemon-name"><PokemonName name={props.name}/></NavLink>
                </div>

                <div className="pokemon-type-div">{type.map(x=> <PokemonType key={x.slot}type={x.type.name}/> )}</div>

                </div>
             
                <div className="icon-wrap"></div>

                <PokemonIcon src={icon}></PokemonIcon>

            </div>
         
      
        </div>
   
    )

}

export default PokemonCard;