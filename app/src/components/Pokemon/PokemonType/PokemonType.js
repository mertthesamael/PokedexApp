
import "../../Icons/icons/style.css"
import "../../Icons/icons/style.css"
import "./pokemon-type.css"
import TypeIcon from "../../Icons/icons/TypeIcon"

const PokemonType = (props) =>{

    let typeClass = props.type;

    return (
        <div className={"type-icon " + typeClass}>
            <TypeIcon type={props.type} />
            </div>
    )

}

export default PokemonType;