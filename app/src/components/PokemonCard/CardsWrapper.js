import "./pokemon-card.css"
import axios from "axios"
import {useEffect, useState} from "react"
import PokemonCard from "./PokemonCard"
import PokeballButton from "../Buttons/PokeballButton"
const CardsWrapper = () =>{

    const [pokemon, setPokemon] = useState([])



    useEffect(()=>{
        const fetchPokemonData =  async (pokemon) => {
            const data = await axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=650").then(response=>response.data)
            setPokemon(data.results)
          }
    fetchPokemonData()
    },[])

    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }

const [pressed, setPressed] = useState(false)

let magic = ""
let wrapMagic=""
let pokeballBottomMagic=""
let pokeballTopMagic = ""
if(pressed === true){
magic="magic"
pokeballBottomMagic = "pokeball-bottom-magic"
pokeballTopMagic = "pokeball-top-magic"
wrapMagic="wrap-magic"
}
function trigger(){
    setPressed(true)
}
    return (
        <div className="wrap">

                <PokeballButton onClick={trigger} check={pressed}></PokeballButton>
            <div className={"body-wrap "+wrapMagic}>
            <div className={"pokeball-top "+ pokeballTopMagic}>

            </div>
            <div className={"cards-wrapper " + magic}>
            {pokemon.map((data)=><PokemonCard key={data.name} name={data.name} url={data.url} number={pad((pokemon.indexOf(data)+1),3)}/>)}

            </div>
            <div className={"pokeball-bottom "+ pokeballBottomMagic}>

             </div>
            </div>
        </div>
           
     
      
    )

}

export default CardsWrapper;