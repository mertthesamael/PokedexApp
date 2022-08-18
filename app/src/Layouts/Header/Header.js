import { NavLink, useLocation } from "react-router-dom"
import "./header.scss"
import { back } from "../../assets/icons/icons"
import { useContext } from "react"
import { PokemonsContext } from "../../store/context"

const Header = (props) => {
    const randomize = () =>{
        let pokemon = require("pokemon").random().toLocaleLowerCase()
        return pokemon
    }
    let location = useLocation().pathname
    let color = ""
    
    const ctx = useContext(PokemonsContext)
    
    location === "/" ? color = 'wht': color=ctx.color
   
    return(
        <div className={"header "+color}>
            {location === "/" ?
            
            <details >

                <summary style={{fontSize: '1.5rem'}}>Menu</summary>

                <div className="header__menu">

                    <input type="text" placeholder="Search Pokémon.." className="searchbar"onChange={ctx.onChangeText}></input>


                <NavLink style={{textDecoration: 'none', color: 'inherit'}} to="/favorites">Favorites</NavLink>

                <NavLink to={"/"+randomize()} style={{textDecoration: 'none', color: 'inherit'}}>Summon Random Pokémon !</NavLink>

                </div>
            </details>
            :
            <div>
                <NavLink to="/" >{back()}</NavLink>
            </div>}

            <div className="header__heading" style={{color: 'black'}}>
                <h1 style={{margin:'0 3rem 0 3rem'}}onClick={()=> ctx.onChangeInfoState(true)}>PokédexApp</h1>
            </div>

        </div>
    )

}

export default Header