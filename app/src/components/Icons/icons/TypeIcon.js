import { electric, flying, nature, fire, ground, water, bug, poison, normal, fairy, psychic, fighting, rock, dark, steel, dragon, ice, ghost } from "./IconSVG";

const TypeIcon = (props) => {
    let typeClass = props.type;
    let typeIcon = ""
    
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
    }else if (typeClass === "fighting"){
        typeIcon = fighting()
    }
    else if (typeClass ==="rock"){
        typeIcon = rock()
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

    return(
        <svg width="25" height="25" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {typeIcon}

        </svg>
    )

}


export default TypeIcon;


