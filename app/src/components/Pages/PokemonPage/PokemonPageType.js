import "./pokemon-page-type.css"
import TypeIcon from "../../Icons/icons/TypeIcon";

const PokemonPageType = (props) => {



    let typeClass = props.type;
    let typeIcon = ""

    return(

        <div className={"typeicon " + typeClass}><h2 style={{color: "white"}}>{props.type.toUpperCase()}</h2><div><TypeIcon type={props.type}></TypeIcon></div></div>

    )

}

export default PokemonPageType;