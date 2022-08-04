import { useLocation } from 'react-router-dom'
import "../../Pages/PokemonPage/pokemon-page-button.css"
import "./header.css"
const Header = (props) =>{
    console.log(props.color+55)
const location = useLocation();
    let color = "";
if(props.color === "electric"){
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
}
    return(
        <div className={"header "+color}>
        <div className="side-menu-content">
            <div className="search-section">
               
            <input type="text" onChange={props.onSearch} className="search-bar">
               </input> <img src={require("../../Icons/icons/search.png")}></img>
                
            </div>
        <h1>PokédexApp</h1>
        </div>
        </div>
    )

}

export default Header;