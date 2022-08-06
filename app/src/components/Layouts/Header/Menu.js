import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate  } from 'react-router-dom'
import "../../Pages/PokemonPage/pokemon-page-button.css"
import Popup from '../../Popup/Popup'
import "./header.css"

const Header = (props) =>{
let navigate = useNavigate()
const location = useLocation();
    let color = "";
if(location.pathname==="/"){
    color="white"
}
else if(props.color === "electric"){
    color="yellow"
}else if (props.color==="poison"){
    color="purple"
}
else if (props.color==="grass"){
    color="green"
}else if (props.color==="bug"){
    color="green"
}
else if (props.color==="fire"){
    color="red"
}else if (props.color==="water"){
    color="blue"
}else if (props.color==="ice"){
    color="blue"
}else if (props.color==="normal"){
    color="normal"
}else if (props.color==="fairy"){
    color="pink"
}else if (props.color==="dragon"){
    color="blue"
}else if (props.color==="fighting"){
    color="red"
}else if (props.color==="ground"){
    color="normal"
}else if (props.color==="psychic"){
    color="red"
}else if (props.color==="ghost"){
    color="purple"
}else if (props.color==="steel"){
    color="steel"
}else if (props.color==="dark"){
    color="dark"
}else if (props.color==='rock'){
    color="rock"
}

    return(
        <div className={"header "+color}>
        <div className="side-menu-content">
            {location.pathname === "/" ?
            <div className="search-section">
               
            <input type="text" onChange={props.onSearch} placeholder="Search..." className="search-bar">
               </input> <img src={require("../../Icons/icons/search.png")}></img>
                
            </div>
            : <div className='back-icon'> <img src={require("../../Icons/icons/arrow.png")} onClick={()=> navigate("/")}></img></div>}
            <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>
            <h1 onClick={props.stateHandler}>PokédexApp</h1>
        
            

        </div>
        </div>
    )

}

export default Header;