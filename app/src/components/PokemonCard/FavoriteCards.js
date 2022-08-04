import { useState } from "react"
import "./pokemon-card.css"


const FavoriteCards = (props) => {
const [arr, setArr] = useState(localStorage.getItem('fav'))
console.log(JSON.parse(arr))
const clear = () => {
    localStorage.clear()
    setArr(null)
}
    return(
        <>
        
        {arr ? JSON.parse(arr).map(x=> <div>{x.name} <img src={x.image}></img></div>): <h1>You have not any favorite Pokémon :( </h1>}
        <button onClick={clear}>Reset Favorites</button>
        </>
    )

}  

export default FavoriteCards;