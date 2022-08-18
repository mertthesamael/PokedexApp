import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { star, starEmpty } from "../../assets/icons/icons";
import useHttp from "../../hooks/useHttp";
import { PokemonsContext } from "../../store/context";
import PokemonTypeIcon from "../PokemonTypeIcon/PokemonTypeIcon";

const PokemonCard = (props) => {
    const ctx  = useContext(PokemonsContext)
    const { fetchPokemonData, pokemon} = useHttp(props.data)
    let keygen = require("keygenerator")
    const [isFavorite, setIsFavorite] = useState(false)
    let starIcon = ""
    isFavorite ? starIcon = star() : starIcon = starEmpty()

    const isFavoriteHandler = (event) => {
    if(Object.keys(localStorage).includes(props.name)){
        fetchPokemonData()
            return localStorage.removeItem(props.name)
    }
    fetchPokemonData()
    
        setIsFavorite(true)
        const favInfo = {
           favpoke__name: props.name,
            favpoke__img: event.target.parentElement.parentElement.parentElement.querySelector(".iconn").src
        }
       return props.onGetFavorite(favInfo)    
    
    }
    useEffect(()=>{
        fetchPokemonData()
    },[])
    
    Object.keys(localStorage).includes(props.name) ?  starIcon=star(): starIcon=starEmpty()
    
    
    return(<>
        <div className="cardwrapper__pokemoncard">

            <div className="cardwrapper__pokemoncard__header">

                <div className="cardwrapper__pokemoncard__header__pokemoninfo">

                    <svg onClick={isFavoriteHandler}version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                     viewBox="0 0 512 512" style={{zIndex:'21',enableBackground:"new 0 0 512 512"}}>
                        {starIcon}
                    </svg>
                    <NavLink to={props.name} onClick={ctx.onChangeText} className="cardwrapper__link">
                    <h2 className="pokemon-number"style={{fontSize: '1.5rem'}}>{props.number}</h2>
                    <h2>{pokemon.name}</h2>
                    </NavLink>

                </div>
                <div className="cardwrapper__pokemoncard__header__pokemontypes">
                    {pokemon.types && pokemon.types.map( type => <PokemonTypeIcon key={keygen._()} type={type.type.name}/>)}
                </div>

            </div>

            <NavLink to={props.name} onClick={ctx.onChangeText} className="cardwrapper__link">
            <div className="cardwrapper__pokemoncard__icon">

                <img src={pokemon.icon} className="iconn" alt="pokemonicon"></img>

            </div>
                        </NavLink>

        </div>
                         </>
    )

}

export default PokemonCard;