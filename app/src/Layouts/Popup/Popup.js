import "./popup.scss"

const Popup = (props) => {


    return(
            <div className="popup">
                <div className="popup__content">
                  {props.children}
                </div>
            </div>
    )

}


export default Popup;