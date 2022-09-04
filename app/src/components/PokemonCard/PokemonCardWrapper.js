import { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./pokemon-card-wrapper.scss"
import useHttp from "../../hooks/useHttp";
import { PokemonsContext } from "../../store/context";
import { down } from "../../assets/icons/icons";
import Loading from "../../Layouts/Loading/Loading";
const PokemonCardWrapper = (props) => {
    let keygen = require("keygenerator")
    const {pokemons, fetchPokemonData, loading} = useHttp()
    const [pokemonList, setPokemonList] = useState(65)
    const ctx = useContext(PokemonsContext)

    useEffect(()=>{
        fetchPokemonData()
    },[])
        
    const pad = (num, size) => {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    
    const offsetHandler = (event)=>{
      return pokemonList+65
    }
    
    const favoritesHandler = (item) => {
        localStorage.setItem(item.favpoke__name, JSON.stringify(item))
    }
    

    return (
      <div className="cardwrapper">
        {loading ? (
          <Loading />
        ) : (
          pokemons
            .filter((x) => {
              return x.name.includes(ctx.text);
            })
            .slice(0, pokemonList)
            .map((data) => (
              <PokemonCard
                onGetFavorite={favoritesHandler}
                data={data.url}
                key={keygen._()}
                name={data.name}
                number={pad(pokemons.indexOf(data) + 1, 3)}
              />
            ))
        )}
        <div className="cardwrapper__loadmore">
          <button onClick={() => setPokemonList(offsetHandler())}>
            {down()}
          </button>
        </div>
      </div>
    );

}

export default PokemonCardWrapper;