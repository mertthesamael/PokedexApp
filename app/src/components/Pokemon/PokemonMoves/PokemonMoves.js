import "./pokemon-moves.css"
import "../../Pages/PokemonPage/PokemonPageButton"
const PokemonMoves = (props) => {

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
    console.log(props.data)
    return(
        <div className="pokemon-move-list-wrapper">
            <div className={"pokemon-move-list-header "+ color}>

                <h2>Level</h2>
                    <h2>Move Name</h2>
            </div>
            
            <div className="pokemon-move-info">
                
                <div className="required-level">
                <h3>{props.requiredLevel}</h3>
                </div>
                <div className="move-name">
                <h3>{props.moveName}</h3>
                </div>

            </div>
            <div className={"pokemon-move-list-footer "+color}>
  
                </div>

        </div>
    )

}


export default PokemonMoves;