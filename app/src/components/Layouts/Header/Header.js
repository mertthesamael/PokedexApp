import { NavLink, useLocation } from "react-router-dom"
import "./header.scss"
import { back } from "../../../assets/icons/icons"
import { useContext } from "react"
import { PokemonsContext } from "../../../store/context"

const Header = (props) => {
    const randomize = () =>{
        let pokemon = require("pokemon").random().toLocaleLowerCase()
        return pokemon
    }
    let location = useLocation().pathname
    let color = ""
    
    const ctx = useContext(PokemonsContext)
    console.log(ctx.onChangeInfoState)
    
    location === "/" ? color = 'wht': color=ctx.color
   
    return(
        <div className={"header "+color}>
            {location === "/" ?
            
            <details>

                <summary>Menu</summary>

                <div className="header__searchbar">

                    <input type="text" onChange={ctx.onChangeText}></input>

                </div>

                <h1>Favorites</h1>

                <NavLink to={"/"+randomize()} style={{textDecoration: 'none', color: 'inherit'}}>Summon Random Pokémon !</NavLink>

            </details>
            :
            <div>
                <NavLink to="/" >{back()}</NavLink>
            </div>}

            <div className="header__heading" style={{color: 'black'}}>
                <h1 style={{margin:'0 2rem 0 2rem'}}onClick={()=> ctx.onChangeInfoState(true)}>PokédexApp</h1>
            </div>

        </div>
    )

}

export default Header