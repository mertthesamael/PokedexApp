import { NavLink, useLocation } from "react-router-dom"
import "./header.scss"
import { back } from "../../../assets/icons/icons"

const Header = (props) => {
    let randomItem = Math.floor(Math.random()*800)
    let location = useLocation().pathname
    let color = ""
    location === "/" ? color = 'white': color=props.color
    return(
        <div className={"header "+color}>
            {location === "/" ?
            
            <details>
            <summary>Menu</summary>
            <div className="header__searchbar">
                <input type="text" onChange={props.onSearch}></input>
            </div>
            <h1>Favorites</h1>
            <NavLink to={"/"+randomItem} style={{textDecoration: 'none', color: 'inherit'}}>Summon Random Pokémon !</NavLink>
            </details>
            :<div><NavLink to="/" >{back()}</NavLink></div>}
            <div className="header__heading" style={{color: 'black'}}>
                <h1>PokédexApp</h1>
            </div>

        </div>
    )

}

export default Header