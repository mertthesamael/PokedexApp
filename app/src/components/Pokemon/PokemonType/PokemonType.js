import Icon from "../../Icons/Icon";
import "./pokemon-type.css"
import {electric, nature, fire, flying, ground, water} from "../../store/context"
const PokemonType = (props) =>{

    let typeClass = props.type;
let typeIcon =""
if(typeClass === "electric"){
    typeIcon = electric()
}else if(typeClass === "grass"){
    typeIcon = nature()
}else if(typeClass === "fire"){
    typeIcon = fire()
}else if(typeClass === "flying"){
    typeIcon = flying()
}else if(typeClass === "ground"){
    typeIcon = ground()
}else if(typeClass === "water"){
    typeIcon = water()
}
    return (
        <div className={"pokemon-type " + typeClass}>
            <div className="icon-div">
            <Icon type={typeIcon}>
            </Icon>
            </div>
            {(props.type).toUpperCase()}
            </div>
    )

}

export default PokemonType;