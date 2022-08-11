import "./pokemon-card.css"
import axios from "axios"
import {useEffect, useState} from "react"
import PokemonCard from "./PokemonCard"
import PokemonLoadButton from "../Buttons/PokemonLoadButton"
const CardsWrapper = (props) =>{
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


//pokeapi offset
const [offset, setOffset] = useState(50)
const offsetSum = () => {
    return offset+50
}

const offsetHandler = () =>{
    return setOffset(offsetSum())
}

return (
    
    <div className="wrap">

            <div className={"body-wrap"}>
         
           
                <div className={"cards-wrapper"}>
                
                    <PokemonLoadButton onClick={offsetHandler}/>

                    {pokemon.filter((x)=>{
                    return x.name.includes(props.input)
                    }).slice(0, offset).map((data)=><PokemonCard  getFavorite={props.getData} key={data.name} name={data.name} url={data.url} number={pad((pokemon.indexOf(data)+1),3)}/>)}

                </div>

            </div>
            
    </div>
           
    )

}

export default CardsWrapper;