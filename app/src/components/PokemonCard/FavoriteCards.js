import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./pokemon-card.css"


const FavoriteCards = (props) => {
const [arr, setArr] = useState(localStorage.getItem('fav'))

const clear = () => {
    localStorage.clear()
    setArr(null)
   return props.favorites.length=0;
}
const test = (event) => {
 
console.log(JSON.parse(arr).filter(x=>x.name === (event.target.parentElement.querySelector('.favorite-pokemon-name').innerHTML.replace(/\s/g, '')))[0])


}
    return(
        <>
        <div className="favorite-pokemons-section">

        {arr ? JSON.parse(arr).map(x=> <NavLink className={"fav-poke-link"} to={"/"+x.name}><div className="favorite-pokemon"><h5 className="favorite-pokemon-name">{x.name} </h5><img alt="favoirte pokemon" src={x.image}></img>{x.number}</div></NavLink>): <h1>You have not any favorite Pokémon :( </h1>}
        </div>
        <button onClick={clear}>Reset Favorites</button>
        </>
    )

}  

export default FavoriteCards;