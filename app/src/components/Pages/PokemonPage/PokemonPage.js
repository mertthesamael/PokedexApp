import PokemonIcon from "../../Pokemon/PokemonIcon/PokemonIcon";
import PokemonName from "../../Pokemon/PokemonName/PokemonName"
import "./pokemon-page.css"
import {useLocation} from 'react-router-dom'
import {useState, useEffect, useReducer} from "react"
import axios from "axios";
import PokemonStats from "../../Pokemon/PokemonStats/PokemonStats";
import PokemonCatagory from "../../Pokemon/PokemonCatagory/PokemonCatagory";
import PokemonWeight from "../../Pokemon/PokemonWeight/PokemonWeight";
import PokemonHeight from "../../Pokemon/PokemonHeight/PokemonHeight";
import { NavLink } from "react-router-dom";
import PokemonPageType from "./PokemonPageType";
import PokemonPageButton from "./PokemonPageButton";
import PokemonAbilities from "../../Pokemon/PokemonAbilities/PokemonAbilities";
import reducer from "../../reducer";

const PokemonPage = (props) => {
    const location = useLocation()
    const pokeName=location.pathname.slice(1)
    const [pokemonName, setPokemonName] = useState(location.pathname.slice(1))
    const [pokemon, dispatch] = useReducer(reducer, {
        name:"",
        stats:"",
        physicalStats:"",
        icon:"",
        types:"",
        mainType:"",
        abilities:"",
        category: "",
        firstEvoIcon: "",
        secondEvoIcon: "",
        baseFormIcon: ""
    })
    
    const [pokemonStats, setPokemonStats] = useState([])
    const {height: pokemonHeight, weight: pokemonWeight} = pokemon.physicalStats;
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemonAbilities, setPokemonAbilities] = useState([])
    
    useEffect(()=>{
        const fetchPokemonInfo =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon/"+pokemonName).then(response=>response.data)   
            const data2 = await axios("https://pokeapi.co/api/v2/pokemon-species/"+pokemonName).then( (response) => response.data)
            const data3 = await axios(data2.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].species.name))
            const data4 = await axios(data2.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].evolves_to[0].species.name))
            const data5 = await axios(data2.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.species.name))
            const data6 = await axios(data2.evolution_chain.url).then((response) => response.data)
            dispatch({
                type: "UPDATE",
                info: data,
                name: pokeName,
                pokemonTypes: data.types,
                pokemonAbilities: data.abilities,
                mainType: data.types[0].type.name,
                stats: data.stats,
                physicalStats: {weight:data.weight, height:data.height},
                icon : data.sprites.other['official-artwork'].front_default,
                category:data2.genera[7].genus,
                firstEvoIcon:data3.data.sprites.other['official-artwork'].front_default,
                secondEvoIcon:data4.data.sprites.other['official-artwork'].front_default,
                baseFormIcon:data5.data.sprites.other['official-artwork'].front_default,
                firstEvolutionName: data6.chain.evolves_to[0].species.name,
                secondEvolutionName: data6.chain.evolves_to[0].evolves_to[0].species.name,
                firstEvolutionLevel: data6.chain.evolves_to[0].evolution_details[0].min_level,
                secondEvolutionLevel : data6.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level,
                baseFormName: data6.chain.species.name
            })
            
            setPokemonTypes(data.types)
            setPokemonAbilities(data.abilities)
            setPokemonStats(data.stats)
            
        }
        fetchPokemonInfo()
    },[pokemonName])
    
    props.onSwitchPokemon(pokemon.mainType)
   


    return (
            <div className="pokemon-page">
                <div className="pokemon-page-info">
                <h1>{pokeName.toUpperCase()}</h1>
                <div className="evolution-chain-wrapper">

                <PokemonPageButton path={pokemonName}title={<PokemonCatagory title={pokemon.category} />} type={pokemon.mainType}>

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
                                <PokemonCatagory title={pokemon.category} />
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
                                <h1> Abilities :</h1> 
                               {pokemonAbilities.map (x=> <PokemonAbilities type={pokemon.mainType} path="/sads" title={x.ability.name}/>)} 
                            </div>
                            <div className="stat-item">
                                <h1> Types :</h1> 
                                
                                {pokemonTypes.map(x => <PokemonPageType key={x.slot} type={x.type.name}/>)}
                            </div>

                        </div> 

                 
                    <div className="pokemon-icon-wrapper">
                        <PokemonIcon src={pokemon.icon} />
                    </div>
                 

                    <div className="pokemon-stats">
                    {pokemonStats.map(x=><PokemonStats key={x.stat.name} type={pokemon.mainType} statName={x.stat.name} statValue={x.base_stat} />)}
                    </div>

                  
                </div>
                        <div className="evolution-chain-wrapper">

                       <PokemonPageButton path={pokemonName}title={"EVOLUTION CHAIN"} type={pokemon.mainType}></PokemonPageButton>
                        </div>
                       
                    <div className="pokemon-evolution-section">

                        <div className="pokemon-evolution-name-wrapper">
                        
                      
                            <div className="pokemon-evolution-icon-wrapper">

                                <PokemonIcon src={pokemon.baseFormIcon}></PokemonIcon>

                                <PokemonPageButton path={pokemonName}type={pokemon.mainType}>

                                <NavLink to={"/"+pokemon.baseFormName} className="pokemon-evolution-name" onClick={() =>
                                setPokemonName(pokemon.baseFormName)}><h2>{pokemon.baseFormName}</h2></NavLink>
                                </PokemonPageButton>


                            </div>

                        </div>

                        <div className="pokemon-evolution-name-wrapper">

                            <h1> {`Level + ${pokemon.firstEvolutionLevel}`}</h1>

                            <img src={require("../../Icons/icons/icons8-arrow-48.png")}></img>
                        
                        </div>

                        <div className="pokemon-evolution-icon-wrapper">

                            <PokemonIcon src={pokemon.firstEvoIcon}></PokemonIcon>

                            <PokemonPageButton path={pokemonName}type={pokemon.mainType}>

                            <NavLink to={"/"+pokemon.firstEvolutionName} className="pokemon-evolution-name" onClick={() =>

                            setPokemonName(pokemon.firstEvolutionName)}><h2>{pokemon.firstEvolutionName}</h2></NavLink>
                            </PokemonPageButton>

                        </div>      
                        
                       
                        <div className="pokemon-evolution-name-wrapper">
                            <h1> {`Level + ${pokemon.secondEvolutionLevel}`}</h1>
                            <img src={require("../../Icons/icons/icons8-arrow-48.png")}></img>
                        
                        </div>
                    
                        
                        <div className="pokemon-evolution-icon-wrapper">
                       
                        <PokemonIcon src={pokemon.secondEvoIcon}></PokemonIcon>
                        <PokemonPageButton path={pokemonName}type={pokemon.mainType}>
                        <NavLink to={"/"+pokemon.secondEvolutionName} className="pokemon-evolution-name" onClick={() =>
                        setPokemonName(pokemon.secondEvolutionName)}><h2>{pokemon.secondEvolutionName}</h2></NavLink>
                        </PokemonPageButton>

                        </div>
                    </div>

        </div>
    )

}

export default PokemonPage;