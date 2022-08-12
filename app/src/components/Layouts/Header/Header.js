
import { NavLink } from 'react-router-dom'
import { useLocation, useNavigate  } from 'react-router-dom'
import "../../Buttons/Buttons.css"
import { search } from '../../Icons/icons/IconSVG'
import "./header.css"

const Header = (props) =>{
let navigate = useNavigate()
const location = useLocation();
    let color = props.color;
if(location.pathname==="/" || location.pathname==="/favorites"){
    color="white"
}

    return(
        <div className={"header "+color}>

            <div className="side-menu-content">
                
            {location.pathname === "/" ?
            <>
            <div className="search-section">
               
            <input type="text" onChange={props.onSearch} placeholder="Search..." className="search-bar">
               </input>{search()}
                
            </div>
               <NavLink to="/favorites" className="favorites-link">Favorites</NavLink>
            </>
            : <div className='back-icon'> <img src={require("../../Icons/icons/arrow.png")} onClick={()=> navigate("/")}></img></div>
            }
            <h1 onClick={props.stateHandler} style={{cursor: 'pointer'}}>PokédexApp</h1>
        
            

        </div>
        </div>
    )

}

export default Header;