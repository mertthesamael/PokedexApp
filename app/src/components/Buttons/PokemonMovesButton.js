import "./Buttons.css"
const PokemonMovesButton = (props) => {
    let color = props.type
   
    return(
        <div className={"pokemon-moves-button "+ color} onClick={props.onClick}>
            MOVE LIST
        </div>
    )

}

export default PokemonMovesButton;