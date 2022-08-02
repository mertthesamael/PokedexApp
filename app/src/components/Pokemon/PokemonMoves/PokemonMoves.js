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
                {props.requiredLevel}
                </div>
                <div className="move-name">
                {props.moveName}
                </div> 
                {/* <div className="move-type">
                    <h2>Move Type</h2>
                {props.moveType}
                </div>
                <div className="move-category">
                    <h2>Move Category</h2>
                {props.moveCategory}
                </div>
                <div className="move-power">
                {props.movePower}
                </div>

                <div className="move-pp">
                {props.movePp}
                </div>
                <div className="move-accuracy">
                {props.moveAccuracy}
                </div>
                <div className="move-priority">
                {props.movePriority}
                </div>
                <div className="move-generation">
                {props.moveGeneration}
                </div> */}

            </div>
            <div className={"pokemon-move-list-footer "+color}>
  
                </div>

        </div>
    )

}


export default PokemonMoves;