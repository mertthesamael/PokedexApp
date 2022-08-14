import { NavLink } from "react-router-dom";
import PokemonInfoButton from "../Buttons/PokemonInfoButton";
import "./pokemon-evolution.scss"


const PokemonEvolution = (props) =>{

    return(
        <div className="pokemon__evolution__item">
            
            <img src={props.src} alt="pokemon-evolutin-icon"></img>
            <NavLink to={"/"+props.name} style={{textDecoration: 'none'}}><PokemonInfoButton text={props.name} type={props.type}></PokemonInfoButton></NavLink>

        </div>
    )

}

export default PokemonEvolution;