import { NavLink, useLocation } from "react-router-dom"
import "./header.scss"
import { PokemonsContext } from "../../../store/context"
import { useContext } from "react"
import { back } from "../../../assets/icons/icons"
const Header = (props) => {
    const ctx = useContext(PokemonsContext)
    let randomItem = ctx.pokemons[Math.floor(Math.random()*ctx.pokemons.length)];
    let location = useLocation().pathname
    let color = ""
    location === "/" ? color = 'white': color=props.color
    return(
        <div className={"header "+color}>
            {location === "/" ?
            
            <details>
            <summary>Menu</summary>
            <div className="header__searchbar">
                <input type="text"></input>
            </div>
            <h1>Favorites</h1>
            <NavLink to={"/"+randomItem}>TEst</NavLink>
            </details>
            :<div><NavLink to="/">{back()}</NavLink></div>}
            <div className="header__heading" style={{color: 'black'}}>
                <h1>PokédexApp</h1>
            </div>

        </div>
    )

}

export default Header