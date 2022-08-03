import "./Buttons.css"
const PokemonMovesButton = (props) => {
    let color = ""
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
    }
    return(
        <div className={"pokemon-moves-button "+ color} onClick={props.onClick}>
            MOVE LIST
        </div>
    )

}

export default PokemonMovesButton;