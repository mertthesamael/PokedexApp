import "./buttons.scss"

const PokemonInfoButton = (props) => {


    return (
      <div
        className={"pokemoninfobutton " + props.type}
        style={{ color: "white", boxShadow: "none" }}
      >
        <h4>{props.text}</h4>
      </div>
    );

}

export default PokemonInfoButton;