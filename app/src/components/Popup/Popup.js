import "./popup.css"


const Popup = (props) => {

    return(props.state)?(
        <div className="popup-wrapper" >
            <div className="popup-card">
                {props.children}
                <button onClick={() => props.setTrigger(false)}>CLOSE</button>
            </div>
        </div>
    ):"";

}
export default Popup;