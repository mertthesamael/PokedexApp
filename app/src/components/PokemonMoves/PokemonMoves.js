import "./pokemon-moves.scss"
import "../PokemonTypeIcon/pokemon-type-icon.scss"
import { useContext } from "react"
import { PokemonsContext } from "../../store/context"
const PokemonMoves = (props) => {
  let keygen = require("keygenerator")

const ctx = useContext(PokemonsContext)
    let color = props.type
     
      return(
          <div className="pokemon-move-list">

              <div className={"pokemon-move-list__header "+ color} style={{boxShadow: 'none'}}>
  
                  <h2 style={{color:'white'}}>Level</h2>
                  <h2 style={{color:'white'}}>Move Name</h2>
  
              </div>
              
              <div className="pokemon-move-list__info">
                  
                  <div className="pokemon-move-list__info__required-level">
                    {ctx.moves.map( move => <h3 key={keygen._()}>{move.version_group_details[0].level_learned_at}</h3>)}
                  </div>
                  <div className="pokemon-move-list__info__move-name">
                    {ctx.moves.map( move => <h3 key={keygen._()}>{move.move.name}</h3>)}
                  </div>
  
              </div>
  
              <div className={"pokemon-move-list__footer "+color} style={{boxShadow: 'none'}}></div>
  
          </div>
      )
  
  }
  
  
  export default PokemonMoves;