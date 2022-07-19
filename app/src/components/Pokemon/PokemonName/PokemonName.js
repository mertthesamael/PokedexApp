import { NavLink } from "react-router-dom"
import "./pokemon-name.css"

function sendName(props){
}
const PokemonName = (props) => {
    let pokemonName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    return (
    <NavLink to={props.name} className="pokemon-name">{pokemonName}</NavLink>
    )

}

export default PokemonName;