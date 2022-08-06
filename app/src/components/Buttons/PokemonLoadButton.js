import { down } from "../store/context";



const PokemonLoadButton = (props) =>{

    return (
        <div className="pokemon-load-button-wrapper">
        <button className={"pokemon-load-button"} onClick={props.onClick} >{down()}</button>
        </div>
    )

}

export default PokemonLoadButton;