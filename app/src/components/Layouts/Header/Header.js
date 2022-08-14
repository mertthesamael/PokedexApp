import { NavLink, useLocation } from "react-router-dom"
import "./header.scss"
import { back } from "../../../assets/icons/icons"
import { useEffect, useState } from "react"

const Header = (props) => {
    const randomize = () =>{
        let pokemon = require("pokemon").random().toLocaleLowerCase()
        return pokemon
    }
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

                <NavLink to={"/"+randomize()} style={{textDecoration: 'none', color: 'inherit'}}>Summon Random Pokémon !</NavLink>

            </details>
            :
            <div>
                <NavLink to="/" >{back()}</NavLink>
            </div>}

            <div className="header__heading" style={{color: 'black'}}>
                <h1 onClick={()=> props.state(true)}>PokédexApp</h1>
            </div>

        </div>
    )

}

export default Header