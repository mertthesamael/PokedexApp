import "./buttons.scss"

const PokemonMovesButton = (props) => {
    
    let color = props.type

    return (
      <div
        className={"pokemon-moves-button " + color}
        onClick={props.onClick}
        style={{ color: "white" }}
      >
        MOVE LIST
      </div>
    );

}

export default PokemonMovesButton;