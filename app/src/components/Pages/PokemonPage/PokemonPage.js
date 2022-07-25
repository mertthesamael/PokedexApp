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
import { NavLink } from "react-router-dom";
import PokemonPageType from "./PokemonPageType";
import PokemonPageButton from "./PokemonPageButton";
const PokemonPage = (props) => {
    const location = useLocation()
    const pokeName=location.pathname.slice(1)
    const [pokemonName, setPokemonName] = useState(location.pathname.slice(1))
    console.log(pokemonName)
   
   
   const [pokemonInfo, setPokemonInfo] = useState([])
   const [pokemonStats, setPokemonStats] = useState([])
   const [pokemonPhysicalStats, setPokemonPhysicalStats] = useState([]) 
   const {height: pokemonHeight, weight: pokemonWeight} = pokemonPhysicalStats;
   const [icon, setIcon] = useState([])
   const [pokemonTypes, setPokemonTypes] = useState([])
   const [pokemonMainType, setPokemonMainType] = useState()
   
   props.onSwitchPokemon(pokemonMainType)
   useEffect(()=>{
       const fetchPokemonInfo =  async (pokemon) => {
           const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokemonName).then(response=>response.data)
           setPokemonInfo(data)
           setPokemonTypes(data.types)
           setPokemonMainType(data.types[0].type.name)
           setPokemonStats(data.stats)
           setPokemonPhysicalStats({weight:data.weight, height:data.height})
           setIcon(data.sprites.other['official-artwork'].front_default)
           
        }
        fetchPokemonInfo()
    },[pokemonName])
 
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
            const data = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokemonName).then( (response) => response.data)
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
   
    },[pokemonName])

        const [pokemonFirstEvolutionLevel, setPokemonFirstEvolutionLevel] = useState([])
        const [pokemonSecondEvolutionLevel, setPokemonSecondEvolutionLevel] = useState([])
    useEffect(()=>{
    const fetchPokemonEvoChain =  async (pokemon) => {
        const data = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokemonName).then( (response) => 
         axios(response.data.evolution_chain.url)).then((response) => {setPokemonFirstEvolution(response.data.chain.evolves_to[0].species.name)
        setPokemonFirstEvolutionLevel(response.data.chain.evolves_to[0].evolution_details[0].min_level)
        setPokemonSecondEvolutionLevel(response.data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level)
        setPokemonFirstForm(response.data.chain.species.name)
        setPokemonSecondEvolution(response.data.chain.evolves_to[0].evolves_to[0].species.name)})

    } 
fetchPokemonEvoChain()

},[pokemonName])
    
console.log(pokemonMainType)

    return (
            <div className="pokemon-page">
                <div className="pokemon-page-info">
                <h1>{pokeName.toUpperCase()}</h1>
                <div className="evolution-chain-wrapper">

                <PokemonPageButton path={pokemonName}title={<PokemonCatagory title={pokemonCategory} />} type={pokemonMainType}>

                </PokemonPageButton>
                </div>
                
                </div>
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
                    {pokemonStats.map(x=><PokemonStats key={x.stat.name} type={pokemonMainType} statName={x.stat.name} statValue={x.base_stat} />)}
                    </div>

                  
                </div>
                        <div className="evolution-chain-wrapper">

                       <PokemonPageButton path={pokemonName}title={"EVOLUTION CHAIN"} type={pokemonMainType}></PokemonPageButton>
                        </div>
                       
                    <div className="pokemon-evolution-section">

                        <div className="pokemon-evolution-name-wrapper">
                        
                      
                            <div className="pokemon-evolution-icon-wrapper">

                                <PokemonIcon src={pokemonFirstFormIcon}></PokemonIcon>

                                <PokemonPageButton path={pokemonName}type={pokemonMainType}>

                                <NavLink to={"/"+pokemonFirstForm} className="pokemon-evolution-name" onClick={() =>
                                setPokemonName(pokemonFirstForm)}><h2>{pokemonFirstForm}</h2></NavLink>
                                </PokemonPageButton>


                            </div>

                        </div>

                        <div className="pokemon-evolution-name-wrapper">

                            <h1> {`Level + ${pokemonFirstEvolutionLevel}`}</h1>

                            <img src={require("../../Icons/icons/icons8-arrow-48.png")}></img>
                        
                        </div>

                        <div className="pokemon-evolution-icon-wrapper">

                            <PokemonIcon src={pokemonFirstEvoIcon}></PokemonIcon>

                            <PokemonPageButton path={pokemonName}type={pokemonMainType}>

                            <NavLink to={"/"+pokemonFirstEvolution} className="pokemon-evolution-name" onClick={() =>

                            setPokemonName(pokemonFirstEvolution)}><h2>{pokemonFirstEvolution}</h2></NavLink>
                            </PokemonPageButton>

                        </div>      
                        

                        <div className="pokemon-evolution-name-wrapper">
                            <h1> {`Level + ${pokemonSecondEvolutionLevel}`}</h1>
                            <img src={require("../../Icons/icons/icons8-arrow-48.png")}></img>
                        
                        </div>

                        <div className="pokemon-evolution-icon-wrapper">
                       
                        <PokemonIcon src={pokemonSecondEvoIcon}></PokemonIcon>
                        <PokemonPageButton path={pokemonName}type={pokemonMainType}>
                        <NavLink to={"/"+pokemonSecondEvolution} className="pokemon-evolution-name" onClick={() =>
                        setPokemonName(pokemonSecondEvolution)}><h2>{pokemonSecondEvolution}</h2></NavLink>
                        </PokemonPageButton>

                        </div>

                    </div>

        </div>
    )

}

export default PokemonPage;