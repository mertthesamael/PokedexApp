import "./popup.css"


const Popup = (props) => {

    return(props.state)?(
        <div className="popup-wrapper">
            <div className="popup-card">
                {props.children}
                <div onClick={() => props.setTrigger(false)} className="close-btn">Close</div>

            </div>
            
        </div>
    ):"";

}
export default Popup;