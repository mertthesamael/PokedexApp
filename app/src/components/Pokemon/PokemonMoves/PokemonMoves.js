import "./pokemon-moves.css"
import "../../Buttons/Pokemonpagebutton/PokemonPageButton"
const PokemonMoves = (props) => {

    let color = props.type
   
    console.log(props.data)
    return(
        <div className="pokemon-move-list-wrapper">
            <div className={"pokemon-move-list-header "+ color} style={{boxShadow: 'none'}}>

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
            <div className={"pokemon-move-list-footer "+color} style={{boxShadow: 'none'}}>
  
                </div>

        </div>
    )

}


export default PokemonMoves;