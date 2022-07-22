import "./header.css"

const Header = (props) =>{

    return(
        <div className="header">
        <div className="side-menu-content">
        {props.children}
        </div>
        </div>
    )

}

export default Header;