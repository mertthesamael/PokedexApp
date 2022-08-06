
import "../../Icons/icons/style.css"
import "../../Icons/icons/style.css"
import "./pokemon-type.css"
import {electric, nature, fire, flying, ground, water, bug, poison, normal, fairy, psychic, fighting, dark, steel, dragon, ice, ghost} from "../../store/context"
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
}else if (typeClass ==="bug"){
    typeIcon = bug()
}else if (typeClass ==="poison"){
    typeIcon = poison()
}else if (typeClass ==="normal"){
    typeIcon = normal()
}else if (typeClass ==="fairy"){
    typeIcon = fairy()
}else if (typeClass ==="psychic"){
    typeIcon = psychic()
}else if (typeClass ==="fighting"){
    typeIcon = fighting()
}
else if (typeClass ==="rock"){
    typeIcon = fighting()
}else if (typeClass ==="dark"){
    typeIcon = dark()
}else if (typeClass ==="steel"){
    typeIcon = steel()
}else if (typeClass ==="dragon"){
    typeIcon = dragon()
}else if (typeClass ==="ice"){
    typeIcon = ice()
}else if (typeClass ==="ghost"){
    typeIcon = ghost()
}
    return (
        <div className={"type-icon " + typeClass}>
            {typeIcon}
            </div>
    )

}

export default PokemonType;