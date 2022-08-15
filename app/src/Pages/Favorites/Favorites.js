import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import "./favorites.scss"

const Favorites = (props) => {

const {fetchPokemonPageData, pokemon} = useHttp(Object.keys(localStorage).map( pokeName =>pokeName))

useEffect(()=>{
    fetchPokemonPageData()
},[])
console.log(pokemon)

    return(
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    )

}

export default Favorites;