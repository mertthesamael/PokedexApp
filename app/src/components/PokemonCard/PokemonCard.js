import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import PokemonTypeIcon from "../PokemonTypeIcon/PokemonTypeIcon";

const PokemonCard = (props) => {

     const { fetchPokemonData,pokemon } = useHttp(props.data)
     let keygen = require("keygenerator")

   useEffect(()=>{
    fetchPokemonData()
    },[])



    return(
    <NavLink to={props.name} className="cardwrapper__link">

        <div className="cardwrapper__pokemoncard">

            <div className="cardwrapper__pokemoncard__header">

                <div className="cardwrapper__pokemoncard__header__pokemoninfo">

                    <h2 style={{fontSize: '1.5rem'}}>{props.number}</h2>
                    <h2>{pokemon.name}</h2>

                </div>

                <div className="cardwrapper__pokemoncard__header__pokemontypes">
                    {pokemon.types && pokemon.types.map( type => <PokemonTypeIcon key={keygen._()} type={type.type.name}/>)}
                </div>

            </div>

            <div className="cardwrapper__pokemoncard__icon">

                <img src={pokemon.icon} alt="pokemonicon"></img>

            </div>

        </div>
    </NavLink>
    )

}

export default PokemonCard;