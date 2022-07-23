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
import PokemonType from "../../Pokemon/PokemonType/PokemonType"
import PokemonPageType from "./PokemonPageType";
const PokemonPage = (props) => {
    
   const location = useLocation()
   const pokeName=location.pathname.slice(1)
   
   
   const [pokemonInfo, setPokemonInfo] = useState([])
   const [pokemonStats, setPokemonStats] = useState([])
   const [pokemonPhysicalStats, setPokemonPhysicalStats] = useState([]) 
   const {height: pokemonHeight, weight: pokemonWeight} = pokemonPhysicalStats;
   const [icon, setIcon] = useState([])
   const [pokemonTypes, setPokemonTypes] = useState([])
   
   
   
   useEffect(()=>{
       const fetchPokemonInfo =  async (pokemon) => {
           const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokeName).then(response=>response.data)
           setPokemonInfo(data)
           setPokemonTypes(data.types)
           setPokemonStats(data.stats)
           setPokemonPhysicalStats({weight:data.weight, height:data.height})
           setIcon(data.sprites.other.dream_world.front_default)
           
        }
        fetchPokemonInfo()
    },[])
    useEffect(()=>{
        const fetchPokemonInfo =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokeName).then(response=>response.data)
            setPokemonInfo(data)
            setPokemonStats(data.stats)
            setPokemonPhysicalStats({weight:data.weight, height:data.height})
            setIcon(data.sprites.other.dream_world.front_default)
         }
         fetchPokemonInfo()
     },[])
    const [pokemonSpecies, setPokemonSpecies] = useState([])
    const [pokemonCategory, setPokemonCategory] = useState([])
    const [pokemonSecondEvolution, setPokemonSecondEvolution] = useState([])
    const [pokemonFirstEvolution, setPokemonFirstEvolution] = useState([])
   const [pokemonFirstForm, setPokemonFirstForm] = useState([])
   const [pokemonFirstFormIcon, setPokemonFirstFormIcon] = useState([])
   const [pokemonFirstEvoIcon, setPokemonFirstEvoIcon] = useState([])
  const [pokemonSecondEvoIcon, setPokemonSecondFormIcon] = useState([])
 
    useEffect(()=>{
        const fetchPokemonSpecies =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokeName).then( (response) => response.data)
            setPokemonSpecies(data)
            setPokemonCategory(data.genera[7].genus)

            const data2 = await axios(data.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].species.name))

            setPokemonFirstEvoIcon(data2.data.sprites.other['official-artwork'].front_default)
            const data3 = await axios(data.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].evolves_to[0].species.name))
            setPokemonSecondFormIcon(data3.data.sprites.other['official-artwork'].front_default)

            const data4 = await axios(data.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.species.name))
            setPokemonFirstFormIcon(data4.data.sprites.other['official-artwork'].front_default)
            
        } 
    fetchPokemonSpecies()
   
    },[])
    useEffect(()=>{
    const fetchPokemonEvoChain =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokeName).then( (response) => 
         axios(response.data.evolution_chain.url)).then((response) => {setPokemonFirstEvolution(response.data.chain.evolves_to[0].species.name)
        setPokemonFirstForm(response.data.chain.species.name)
        setPokemonSecondEvolution(response.data.chain.evolves_to[0].evolves_to[0].species.name)})

    } 
fetchPokemonEvoChain()

},[])
    
console.log(pokemonTypes)

    return (
            <div className="pokemon-page">
                
                <div className="pokemon-page-header">


                        <div className="pokemon-physical-stats">

                            <div className="stat-item">
                                <h1>Name : </h1><PokemonName name={pokeName} />
                            </div>

                            <div className="stat-item">
                                <h1>Category :</h1>
                                <PokemonCatagory title={pokemonCategory} />
                            </div>

                            <div className="stat-item">
                                <h1>Height :</h1>
                                <PokemonHeight value={pokemonHeight}/>
                            </div>

                            <div className="stat-item">
                                <h1> Weight :</h1> 
                                <PokemonWeight value={pokemonWeight}/>
                            </div>
                            <div className="stat-item">
                                <h1> Types :</h1> 
                                
                                {pokemonTypes.map(x => <PokemonPageType key={x.slot} type={x.type.name}/>)}
                            </div>

                        </div> 

                 

                    <div className="pokemon-icon-wrapper">
                        <PokemonIcon src={icon} />
                    </div>

                    <div className="pokemon-stats">
                    {pokemonStats.map(x=><PokemonStats key={x.stat.name} statName={x.stat.name} statValue={x.base_stat} />)}
                    </div>

                </div>


                       
                    <div className="pokemon-evolution-section">
                        <PokemonIcon src={pokemonFirstFormIcon}></PokemonIcon>
                        <h1>{pokemonFirstForm}</h1>
                        <PokemonIcon src={pokemonFirstEvoIcon}></PokemonIcon>
                        <h1>{pokemonFirstEvolution}</h1>
                        <PokemonIcon src={pokemonSecondEvoIcon}></PokemonIcon>
                        <h1>{pokemonSecondEvolution}</h1>
                    </div>

        </div>
    )

}

export default PokemonPage;