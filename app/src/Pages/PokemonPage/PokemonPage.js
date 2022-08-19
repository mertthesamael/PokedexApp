import { useContext, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { arrowRight } from "../../assets/icons/icons";
import useHttp from "../../hooks/useHttp";
import PokemonInfoButton from "../../components/Buttons/PokemonInfoButton";
import PokemonMovesButton from "../../components/Buttons/PokemonMovesButton";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";
import PokemonEvolution from "../../components/PokemonEvolution/PokemonEvolution";
import PokemonBaseStats from "../../components/PokemonStats/PokemonBaseStats";
import PokemonPhysicalStats from "../../components/PokemonStats/PokemonPhysicalStats";
import "./pokemon-page.scss"
import { PokemonsContext } from "../../store/context";
import Loading from "../../Layouts/Loading/Loading";

const PokemonPage = (props) => {

    let name = useLocation().pathname.slice(1)
    let keygen = require("keygenerator")
    const {fetchPokemonPageData,pokemon,loading} = useHttp(name)

    const ctx = useContext(PokemonsContext)

    useEffect(() =>{
    fetchPokemonPageData()
    },[name])

    useEffect(()=> {
        window.scrollTo(0, 0)
        ctx.onGetMoves(pokemon.moves)
        ctx.onGetType(pokemon.mainType)
})

    return(
        <div className="pokemonpage" >
            
            {loading ? <Loading></Loading>:
                <>
                <div className="pokemonpage__header">

                    <h1>{pokemon.name.toLocaleString().toUpperCase()}</h1>
                    <PokemonInfoButton text={pokemon.category} type={pokemon.mainType}/>
                    
                </div>

                <div className="pokemonpage__main">

                    <PokemonPhysicalStats data={pokemon.physicalStats} name={pokemon.name} category={pokemon.category} types={pokemon.types} abilities={pokemon.abilities} type={pokemon.mainType}/>
                    
                    <div className="pokemonpage__main__icon">

                        <img src={pokemon.icon}></img>

                    </div>

                    <PokemonBaseStats data={pokemon.stats} type={pokemon.mainType}/>

                </div>

                <div className="pokemonpage__footer">

                    <PokemonInfoButton text="Evolution Chain" type={pokemon.mainType}/>

                    <div className="pokemonpage__footer__evolutionchain">

                        <PokemonEvolution src={pokemon.baseFormIcon} type={pokemon.mainType} name={pokemon.baseFormName} />
                        {pokemon.firstEvolutionName&&
                        <div className="pokemonpage__footer__evolutionchain__evolutiontype">

                            <h3>{pokemon.firstEvolutionLevel ?`Level + ${pokemon.firstEvolutionLevel}`: pokemon.firstEvolutionHapiness?`Base Happiness ${pokemon.firstEvolutionHapiness}`: pokemon.firstEvolutionItem?`Use Item : ${(pokemon.firstEvolutionItem.name.split('-').join(' '))}`: `Trigger ${pokemon.firstEvolutionTrigger.name}`}</h3>

                        {arrowRight()}
                        </div>
                        }

                        {pokemon.firstEvolutionName && <PokemonEvolution src={pokemon.firstEvolutionIcon}type={pokemon.mainType} name={pokemon.firstEvolutionName}/>}

                        {pokemon.secondEvolutionName&&
                        <div className="pokemonpage__footer__evolutionchain__evolutiontype">

                            <h3>{pokemon.secondEvolutionLevel ?`Level + ${pokemon.secondEvolutionLevel}`: pokemon.secondEvolutionHapiness?`Base Happiness ${pokemon.secondEvolutionHapiness}`: pokemon.secondEvolutionItem?`Use Item : ${(pokemon.secondEvolutionItem.name.split('-').join(' '))}`: `Trigger ${pokemon.secondEvolutionTrigger.name}`}</h3>

                        {arrowRight()}
                        </div>
                        }
                        {pokemon.secondEvolutionName && <PokemonEvolution src={pokemon.secondEvolutionIcon}type={pokemon.mainType} name={pokemon.secondEvolutionName}/>}


                    </div>
                        <div className="pokemonpage__footer__pokemondetails">

                            <PokemonDetails title={"Training"} type={pokemon.mainType} data={[{capture_rate: [pokemon.catchRate], growth_rate: [pokemon.growthRate], base_experience: [pokemon.baseExp], held_items: pokemon.heldItems.length!==0?pokemon.heldItems.map(x=><div key={keygen._()}>{x.item.name.split("-").join(" ")+" "+x.version_details[0].rarity+'%'}</div>):"None"}]}/>
                        
                            <PokemonDetails title={"Breeding"} type={pokemon.mainType} data={[{egg_cycles: pokemon.eggCycles,egg_groups: pokemon.eggGroups.map(x=><div key={keygen._()}>{x.name+" "}</div>), }]}/>
                            <div onClick={()=>ctx.onChangeMoveState(true)}><PokemonMovesButton type={pokemon.mainType}></PokemonMovesButton></div>
                            
                        </div>
                    <div>
                    </div>

                </div>
                </>
                    }
        </div>

    )

}

export default PokemonPage;