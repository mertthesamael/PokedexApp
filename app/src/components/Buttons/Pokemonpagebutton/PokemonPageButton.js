import "./pokemon-page-button.css"
import { NavLink } from "react-router-dom";
const PokemonPageButton = (props) => {
let color = props.type;


return (
        <div className={"pokemon-page-button "+color}>

        <NavLink to={"/"+props.path} className="pokemon-page-button-text">{props.title}{props.children}</NavLink>

    </div>
    )

}


export default PokemonPageButton;