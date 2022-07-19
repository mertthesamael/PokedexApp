import PokemonIcon from "../../Pokemon/PokemonIcon/PokemonIcon";
import PokemonName from "../../Pokemon/PokemonName/PokemonName"
import "./pokemon-page.css"
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from "axios";
import PokemonStats from "../../Pokemon/PokemonStats/PokemonStats";
const PokemonPage = () => {
    
   const location = useLocation()
   const pokeName=location.pathname.slice(1)



   const [pokemonInfo, setPokemonInfo] = useState([])

   useEffect(()=>{
    const fetchPokemonInfo =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokeName).then(response=>response.data)
        setPokemonInfo(data.stats)
        
      }
fetchPokemonInfo()
},[])



const [icon, setIcon] = useState([])


useEffect(()=>{
    const fetchPokemonIcon =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokeName).then(response=>response.data)
        setIcon(data.sprites.other['official-artwork'].front_default)
        }
fetchPokemonIcon()
}, []);


 


    return (
        <div className="pokemon-page">
            <div className="pokemon-page-header">
            <div className="pokemon-page-stats">
            <PokemonName name={pokeName} />
            {pokemonInfo.map(x=><PokemonStats key={x.stat.name} statName={x.stat.name} statValue={x.base_stat} />)}
            </div>
            <PokemonIcon src={icon} />
            </div>
        </div>
    )

}

export default PokemonPage;