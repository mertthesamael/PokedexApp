import { firstLetterUpper } from "../../store/context";
import "./pokemon-details.css"
const PokemonDetails = (props) => {
let color = props.type

    return(
        <>
            <div className="pokemon-training">
            <h1>Training</h1>
                            <h2>Capture Rate : <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}>{props.catchRate}</span></h2>
                            <h2>Growth Rate : <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}>{props.growthRate}</span></h2>
                            <h2>Base Experience : <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}>{props.baseExp}</span></h2>
                            <h2>Held Items :  <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}><div className="held-items-wrapper">{props.heldItems.length!==0 ? props.heldItems.map(x=>  <div>{firstLetterUpper(x.item.name.split('-').join(' '))}  {x.version_details[0].rarity}% </div>): "None"}</div></span>
                            </h2>

            </div>
            <div className="pokemon-breeding">
            <h1>Breeding</h1>
                            <h2>Egg Groups : <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}>{props.eggGroups.length!==0 ? props.eggGroups.map(x=>  `${firstLetterUpper(x.name)} ` ):"None"} </span></h2>
                            <h2>Egg Cycles : <span className={"pokemon-detail-value "+ color} style={{background: 'none', boxShadow:'none'}}>{props.eggCycles}</span></h2>
            </div>
        </>
    )

}

export default PokemonDetails;