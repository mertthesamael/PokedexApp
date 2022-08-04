import { firstLetterUpper } from "../../store/context";
import "./pokemon-details.css"
const PokemonDetails = (props) => {
let color = ""
if(props.type === "electric"){
    color="yellow1"
}else if (props.type==="poison"){
    color="purple1"
}
else if (props.type==="grass"){
    color="green1"
}else if (props.type==="bug"){
    color="green1"
}
else if (props.type==="fire"){
    color="red1"
}else if (props.type==="water"){
    color="blue1"
}else if (props.type==="ice"){
    color="blue1"
}else if (props.type==="normal"){
    color="normal1"
}else if (props.type==="fairy"){
    color="pink1"
}else if (props.type==="dragon"){
    color="blue1"
}else if (props.type==="fighting"){
    color="red1"
}else if (props.type==="ground"){
    color="normal1"
}else if (props.type==="psychic"){
    color="red1"
}else if (props.type==="ghost"){
    color="purple1"
}
    return(
        <>
            <div className="pokemon-training">
            <h1>Training</h1>
                            <h2>Capture Rate : <span className={"pokemon-detail-value "+ color}>{props.catchRate}</span></h2>
                            <h2>Growth Rate : <span className={"pokemon-detail-value "+ color}>{props.growthRate}</span></h2>
                            <h2>Base Experience : <span className={"pokemon-detail-value "+ color}>{props.baseExp}</span></h2>
                            <h2>Held Items :  <span className={"pokemon-detail-value "+ color}>{props.heldItems.length!==0 ? props.heldItems.map(x=>  `${firstLetterUpper(x.item.name.split('-').join(' '))}  ${x.version_details[0].rarity}%` ): "None"}</span>
                            </h2>

            </div>
            <div className="pokemon-breeding">
            <h1>Breeding</h1>
                            <h2>Egg Groups : <span className={"pokemon-detail-value "+ color}>{props.eggGroups.length!==0 ? props.eggGroups.map(x=>  `${firstLetterUpper(x.name)} ` ):"None"} </span></h2>
                            <h2>Egg Cycles : <span className={"pokemon-detail-value "+ color}>{props.eggCycles}</span></h2>
            </div>
        </>
    )

}

export default PokemonDetails;