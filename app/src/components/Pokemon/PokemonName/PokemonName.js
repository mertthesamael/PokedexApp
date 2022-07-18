import { NavLink } from "react-router-dom"
import "./pokemon-name.css"

const PokemonName = (props) => {

    return (
    <NavLink to="pokemon" className="pokemon-name">{props.name}</NavLink>        
    )

}

export default PokemonName;