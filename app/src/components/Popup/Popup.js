import { useContext } from "react";
import { TriggerContext } from "../store/context";
import "./popup.css"


const Popup = (props) => {

    const ctx = useContext(TriggerContext)


    return(ctx.state || props.state)?(
        <div className="popup-wrapper">

            <div className="popup-card">

                {props.children}
                <div onClick={() => props.setTrigger(false)} className="close-btn">Close</div>

            </div>
            
        </div>
    ):"";

}
export default Popup;