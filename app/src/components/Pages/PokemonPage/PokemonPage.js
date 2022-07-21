import PokemonIcon from "../../Pokemon/PokemonIcon/PokemonIcon";
import PokemonName from "../../Pokemon/PokemonName/PokemonName"
import "./pokemon-page.css"
import {useLocation} from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from "axios";
import PokemonStats from "../../Pokemon/PokemonStats/PokemonStats";
import PokemonCatagory from "../../Pokemon/PokemonCatagory/PokemonCatagory";
import PokemonWeight from "../../Pokemon/PokemonWeight/PokemonWeight";
import PokemonHeight from "../../Pokemon/PokemonHeight/PokemonHeight";
const PokemonPage = (props) => {
    
   const location = useLocation()
   const pokeName=location.pathname.slice(1)
   
   
   const [pokemonInfo, setPokemonInfo] = useState([])
   const [pokemonStats, setPokemonStats] = useState([])
   const [pokemonPhysicalStats, setPokemonPhysicalStats] = useState([]) 
   const {height: pokemonHeight, weight: pokemonWeight} = pokemonPhysicalStats;
   const [icon, setIcon] = useState([])

  

   useEffect(()=>{
    const fetchPokemonInfo =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokeName).then(response=>response.data)
        setPokemonInfo(data)
        setPokemonStats(data.stats)
        setPokemonPhysicalStats({weight:data.weight, height:data.height})
        setIcon(data.sprites.other.home.front_default)
     }
     fetchPokemonInfo()
 },[])

   const [pokemonSpecies, setPokemonSpecies] = useState([])
   const [pokemonCategory, setPokemonCategory] = useState([])
   useEffect(()=>{
    const fetchPokemonSpecies =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokeName).then(response=>response.data)
        setPokemonSpecies(data)
        setPokemonCategory(data.genera[7].genus)
    }
    fetchPokemonSpecies()
    },[])

  

    return (
        <div className="pokemon-page">

                <div className="pokemon-icon-wrapper">
                <PokemonIcon src={icon} />
                </div>
                <div className="pokemon-page-card">
                
                <div className="card-left">   

                    <div className="pokemon-name-wrapper">
                        <h1>Name : </h1><PokemonName name={pokeName} />
                     </div>

                    <div className="pokemon-category-wrapper">
                        <h1>Category : </h1><PokemonCatagory title={pokemonCategory}></PokemonCatagory>
                    </div>

                    <div className="pokemon-physical-stats-wrapper">
                        <h1 className="pokemon-height">Height : <PokemonHeight value={pokemonHeight}/></h1>
                        <h1 className="pokemon-weight">Weight : <PokemonWeight value={pokemonWeight}/></h1>                       
                    </div>

                </div>
                

                <div className="card-right">

                    <div className="pokemon-page-stats-card">
                    {pokemonStats.map(x=><PokemonStats key={x.stat.name} statName={x.stat.name} statValue={x.base_stat} />)}
                    </div>
          
                </div>
        </div>
        </div>
    )

}

export default PokemonPage;