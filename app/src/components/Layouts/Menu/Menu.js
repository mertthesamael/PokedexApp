import "./menu.css"

const Menu = (props) =>{

    return(
        <div className="side-menu">
        <div className="side-menu-content">
        {props.children}
        </div>
        </div>
    )

}

export default Menu;