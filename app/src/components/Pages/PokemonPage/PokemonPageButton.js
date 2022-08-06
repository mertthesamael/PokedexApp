import "./pokemon-page-button.css"
import { NavLink } from "react-router-dom";
const PokemonPageButton = (props) => {
let color = "";
if(props.type === "electric"){
    color="yellow"
}else if (props.type==="poison"){
    color="purple"
}
else if (props.type==="grass"){
    color="green"
}else if (props.type==="bug"){
    color="green"
}
else if (props.type==="fire"){
    color="red"
}else if (props.type==="water"){
    color="blue"
}else if (props.type==="ice"){
    color="blue"
}else if (props.type==="normal"){
    color="normal"
}else if (props.type==="fairy"){
    color="pink"
}else if (props.type==="dragon"){
    color="blue"
}else if (props.type==="fighting"){
    color="red"
}else if (props.type==="ground"){
    color="normal"
}else if (props.type==="psychic"){
    color="red"
}else if (props.type==="ghost"){
    color="purple"
}else if (props.type==="steel"){
    color="steel"
}else if (props.type==="dark"){
    color="dark"
}else if (props.type==='rock'){
    color="rock"
}

return (
        <div className={"pokemon-page-button "+color}>

        <NavLink to={"/"+props.path} className="pokemon-page-button-text">{props.title}{props.children}</NavLink>

    </div>
    )

}


export default PokemonPageButton;