import PokemonInfoButton from "../Buttons/PokemonInfoButton";
import PokemonpageTypeIcon from "../PokemonTypeIcon/PokemonpageTypeIcon";
import "./pokemon-stats.scss"


const PokemonPhysicalStats = (props) => {
let keygen = require("keygenerator")
    return(
        <div className="pokemon-stats" style={{alignItems:'flex-start'}}>
            <div className="pokemon-stats__statitem">
            <h2>Name: {props.name}</h2>
            </div>

            <div className="pokemon-stats__statitem">
            <h2>Category: {props.category}</h2>
            </div>

            <div className="pokemon-stats__statitem">
            <h2>Height: {(props.data.height*0.1).toFixed(1)+"m"}</h2>
            </div>

            <div className="pokemon-stats__statitem">
            <h2>Weight: {(props.data.weight*0.1).toFixed(1)+"kg"}</h2>
            </div>

            <div className="pokemon-stats__statitem">
            <h2>Abilities: </h2> <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>{props.abilities &&props.abilities.map( ability => <PokemonInfoButton key={keygen._()} text={ability.ability.name.toUpperCase()} type={props.type}/>)}</div>
            </div>

            <div className="pokemon-stats__statitem" >
            <h2>Types: </h2><div>{props.types && props.types.map(type => <PokemonpageTypeIcon key={keygen._()} types={type.type.name}/>)}</div>
            </div>

        </div>
    )

}

export default PokemonPhysicalStats;