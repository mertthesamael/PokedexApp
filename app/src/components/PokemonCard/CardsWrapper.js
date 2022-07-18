import "./pokemon-card.css"
import axios from "axios"
import {useEffect, useState} from "react"
import PokemonCard from "./PokemonCard"
const CardsWrapper = () =>{

    const [pokemon, setPokemon] = useState([])

    const fetchPokemonData =  async (pokemon) => {
      const data = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50").then(response=>response.data)
      setPokemon(data.results)
    }

    useEffect(()=>
    fetchPokemonData(),
    [])

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }


    return (
        <div className="cards-wrapper">
            {pokemon.map((data)=><PokemonCard key={data.name} name={data.name} url={data.url} number={pad((pokemon.indexOf(data)+1),3)}/>)}
        </div>
    )

}

export default CardsWrapper;