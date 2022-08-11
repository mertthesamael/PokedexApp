import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./pokemon-card.css"
import {firstLetterUpper} from "../store/context"


const FavoriteCards = (props) => {
    
//Display localstorage items and clear function
const [arr, setArr] = useState(localStorage.getItem('fav'))
const clear = () => {
    localStorage.clear()
    setArr(null)
   return props.favorites.length=0;
}

    return(
        <>
        <div className="favorite-pokemons-section">


        {arr ? JSON.parse(arr).map(x=> <div className="fav-pokes"><NavLink className={"fav-poke-link"} to={"/"+x.name}><div className="favorite-pokemon"><h3 className="favorite-pokemon-name">{firstLetterUpper(x.name)} </h3><img alt="favoirte pokemon" src={x.image}></img>{x.number}</div></NavLink></div>): <h1>You have not any favorite Pokémon :( </h1>}


        </div>
        <button onClick={clear} className="reset-fav-btn"><h4>Reset Favorites</h4></button>
        </>
    )

}  

export default FavoriteCards;