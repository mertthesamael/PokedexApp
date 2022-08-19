import axios from "axios"
import { useState, useReducer} from "react"
import reducer from "./../components/reducer"

const useHttp = (url)  => {
    const [pokemon, dispatch] = useReducer(reducer, {
        name:"", pokemons: [],stats:"",physicalStats:"",heldItems: [],eggGroups: [],icon:"",types:"",mainType:"",abilities:"",category: "",firstEvoIcon: "",secondEvoIcon: "",baseFormIcon: "",firstEvolutionName: "",secondEvolutionName: "",firstEvolutionLevel: "",secondEvolutionLevel :"",baseFormName:""
    })
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const fetchPokemonData = async () => {
        setLoading(true)
        const data = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=810").then(response=>response.data)
        setPokemons(data.results) 
        setLoading(false)

        if (url !== undefined){

            const data2 = await axios(url).then(response=>response.data)
            
            dispatch({
                type: "UPDATE",
                pokemons:data.results,
                icon: data2.sprites.other['official-artwork'].front_default,
                types: data2.types,
                name: data2.name

            })
        }
        
    }   
    
    const fetchPokemonPageData= async () =>{
        setLoading(true)

        const data3 = await axios("https://pokeapi.co/api/v2/pokemon/"+url).then(response=>response.data)  
       

            const data4 = await axios("https://pokeapi.co/api/v2/pokemon-species/"+data3.id).then( (response) => response.data)
            const data5 = await axios(data4.evolution_chain.url).then((response) => response.data)
            
            const data6 = await axios(data4.evolution_chain.url).then((response) => response.data.chain.evolves_to[0]?.species.name ? axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].species.name) : "")
            
            const data7 = await axios(data4.evolution_chain.url).then((response) => response.data.chain.evolves_to[0]?.evolves_to[0]?.species ? axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.evolves_to[0].evolves_to[0].species.name): "")
            const data8 = await axios(data4.evolution_chain.url).then((response) => axios("https://pokeapi.co/api/v2/pokemon/"+response.data.chain.species.name))
            setLoading(false)
            
            dispatch({
                type: "UPDATE",
                category:data4.genera[7].genus,
                growthRate: data4.growth_rate.name,
                catchRate:data4.capture_rate,
                icon: data3.sprites.other['official-artwork'].front_default,
                types: data3.types,
                eggGroups:data4.egg_groups,
                eggCycles:data4.hatch_counter,
                name: data3.name,
                moves: data3.moves,
                abilities:data3.abilities,
                mainType: data3.types[0].type.name,
                baseExp: data3.base_experience,
                stats: data3.stats,
                heldItems:data3.held_items,
                physicalStats: {weight:data3.weight, height:data3.height},
                baseFormName:data5.chain.species.name,
                firstEvolutionName: data5.chain.evolves_to[0]?.species.name,
                secondEvolutionName: data5.chain.evolves_to[0]?.evolves_to[0]?.species.name,
                firstEvolutionLevel:data5.chain.evolves_to[0]?.evolution_details[0].min_level,
                firstEvolutionItem: data5.chain.evolves_to[0]?.evolution_details[0].item,
                firstEvolutionIcon:data6.data?.sprites.other['official-artwork'].front_default,
                secondEvolutionIcon: data7.data?.sprites.other['official-artwork'].front_default,
                secondEvolutionItem: data5.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].item,
                firstEvolutionTrigger:data5.chain.evolves_to[0]?.evolution_details[0].trigger,
                secondEvolutionTrigger:data5.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].trigger,
                secondEvolutionHapiness:data5.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].min_happiness,
                firstEvolutionHapiness:data5.chain.evolves_to[0]?.evolution_details[0].min_happiness,
                secondEvolutionLevel : data5.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0].min_level,
                baseFormIcon:data8.data.sprites.other['official-artwork'].front_default
                
            })
            
            
        }
        
        return{
            pokemon,
        loading,
        fetchPokemonData,
        fetchPokemonPageData,
        pokemons,
    }
}

export default useHttp;    
