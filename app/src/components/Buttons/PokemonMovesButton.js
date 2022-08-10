import { useContext } from "react"
import { TriggerContext } from "../store/context"
import "./Buttons.css"


const PokemonMovesButton = (props) => {
    let color = props.type
    const ctx = useContext(TriggerContext)

    return(
        <div className={"pokemon-moves-button "+ color} onClick={props.onClick}>
            MOVE LIST
        </div>
    )

}

export default PokemonMovesButton;