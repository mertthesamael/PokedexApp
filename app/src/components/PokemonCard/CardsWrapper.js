import "./pokemon-card.css"
import axios from "axios"
import {useEffect, useState} from "react"
import PokemonCard from "./PokemonCard"
import PokeballButton from "../Buttons/PokeballButton"
import PokemonLoadButton from "../Buttons/PokemonLoadButton"
const CardsWrapper = () =>{

    
    const [pokemon, setPokemon] = useState([])
    //fetch pokemons from API
    useEffect(()=>{
        const fetchPokemonData =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=800").then(response=>response.data)
            setPokemon(data.results) 
        }
fetchPokemonData()
},[])

//show pokemon numbers in three zero format(001)
function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

//pokeball animation
const [pressed, setPressed] = useState(false)
function trigger(){
    setPressed(true)
}
let magic = ""
let wrapMagic=""
let pokeballBottomMagic=""
let pokeballTopMagic = ""
let offsetButtonMagic=""
if(pressed === true){
    magic="magic"
    pokeballBottomMagic = "pokeball-bottom-magic"
    pokeballTopMagic = "pokeball-top-magic"
    wrapMagic="wrap-magic"
    let offsetButtonMagic="offset-button-magic"
   
}
function showMoreButton(x){
    return
}
//pokeapi offset
const [offset, setOffset] = useState(50)
function offsetSum(){
    return offset+50
}

function offsetHandler(){
    return setOffset(offsetSum())
}
return (
    <div className="wrap">

            <PokeballButton onClick={trigger} check={pressed} />
            <div className={"body-wrap "+wrapMagic}>
                <div className={"pokeball-top "+ pokeballTopMagic}/>
                <div className={"cards-wrapper " + magic}>
                    <PokemonLoadButton onClick={offsetHandler}/>

                    {pokemon.slice(0, offset).map((data)=><PokemonCard key={data.name} name={data.name} url={data.url} number={pad((pokemon.indexOf(data)+1),3)}/>)}

                </div>
                <div className={"pokeball-bottom "+ pokeballBottomMagic} />
            </div>
    </div>
           
     
      
    )

}

export default CardsWrapper;