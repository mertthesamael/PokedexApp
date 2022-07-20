import { useState } from "react"



const PokemonLoadButton = (props) =>{

    return (
        <div className="pokemon-load-button-wrapper">
        <button className={"pokemon-load-button"} onClick={props.onClick} >↓</button>
        </div>
    )

}

export default PokemonLoadButton;