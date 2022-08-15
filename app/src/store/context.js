import React, { useState } from "react";


const PokemonsContext = React.createContext({
    infoState: true,
    moveState: false
})


export const PokemonsContextWrapper = (props) => {

    const [moveState, setMoveState] = useState(false)
    const [infoState, setInfoState] = useState(false)
    const [color, setColor] = useState("")
    const [text, setText] = useState("")
    const [pokemonMoves, setPokemonMoves] = useState([])

    const infoStateHandler = (state) => {
        setInfoState(state)
    }
    const moveStateHandler = (state) => {
        setMoveState(state)
    }
    const getType = (type) =>{
    setColor(type)
    }

    const getMoves = (moves) => {
    setPokemonMoves(moves)
    }
  
    const handleText = (event) => {
    return setText(event.target.value.toLowerCase())
    }


return (
    <PokemonsContext.Provider value={
        {infoState:infoState,
        moveState:moveState,
        text: text,
        moves: pokemonMoves,
        color: color,
        onChangeInfoState: infoStateHandler,
        onChangeMoveState: moveStateHandler,
        onChangeText : handleText,
        onGetMoves : getMoves,
        onGetType : getType,
        }} >
        {props.children}
    </PokemonsContext.Provider>
)

}





export { PokemonsContext }