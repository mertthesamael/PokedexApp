import "../../Pages/PokemonPage/pokemon-page-button.css"
import "./header.css"
const Header = (props) =>{
    console.log(props.color+55)

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
}
    return(
        <div className={"header "+color}>
        <div className="side-menu-content">
        {props.children}
        </div>
        </div>
    )

}

export default Header;