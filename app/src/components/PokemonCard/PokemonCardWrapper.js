import { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemon-card-wrapper.scss"
import useHttp from "../../hooks/useHttp";
const PokemonCardWrapper = (props) => {
    let keygen = require("keygenerator")
    const {pokemons, fetchPokemonData, pokemon} = useHttp()
    

    const pokemonNames=pokemons.map(x=>x.name)
    useEffect(()=>{
    fetchPokemonData()
    },[])
    useEffect(()=>{
        props.onSetPokemons(pokemonNames)
    },[pokemons])
    const pad = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    return(
     
        <div className="cardwrapper">

            {
                pokemons.slice(0,65).map( data => <PokemonCard data={data.url} key={keygen._()} name={data.name} number={pad((pokemons.indexOf(data)+1),3)}/>)
            }

        </div>
          
    )

}

export default PokemonCardWrapper;