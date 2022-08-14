import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemon-card-wrapper.scss"
import useHttp from "../../hooks/useHttp";
const PokemonCardWrapper = (props) => {
    let keygen = require("keygenerator")
    const {pokemons, fetchPokemonData} = useHttp()
    const [pokemonList, setPokemonList] = useState(65)

    useEffect(()=>{
    fetchPokemonData()
    },[])
    
    const pad = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

    const offsetHandler = ()=>{
       return pokemonList+65
    }

    return(
     
        <div className="cardwrapper">

            {
                pokemons.filter((x)=> {
                   return x.name.includes(props.input)               
                }).slice(0,pokemonList).map( data => <PokemonCard data={data.url} key={keygen._()} name={data.name} number={pad((pokemons.indexOf(data)+1),3)}/>)
            }
                <button onClick={()=> setPokemonList(offsetHandler())}>Test</button>
        </div>
          
    )

}

export default PokemonCardWrapper;