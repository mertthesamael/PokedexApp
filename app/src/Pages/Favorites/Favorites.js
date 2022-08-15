import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./favorites.scss"

const Favorites = (props) => {
    let keygen = require("keygenerator")
    const [favPokes, setFavPokes] = useState([])
    const resetFav = () => {
        localStorage.clear()
    }

    
    return(

    <div className="favoritespage">

        
        <div className="favoritespage__favorite-cards">
            
            {Object.values(localStorage).map(favorite => 
            <NavLink to={"/"+JSON.parse(favorite).name} style={{textDecoration: 'none', color: 'inherit', cursor: 'default'}}>

            <div className="favoritespage__favorite-cards__item" key={keygen._()}>
                <h1>{JSON.parse(favorite).name}</h1>   
                <img src={JSON.parse(favorite).img}></img>
            
            </div></NavLink>)}
           
        </div>
            <div className="reset-btn">
                <NavLink to="/"onClick={resetFav} className="reset-btn__reset">Reset Favorites !</NavLink>
            </div>
    </div>
    )

}

export default Favorites;