import { starEmpty,star } from "./IconSVG";

const StarIcons = (props) => {

let type = starEmpty()
    if(props.type === "fill"){
        type = star()
    }

    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512", pointerEvents: 'none'}}>

        {type}

        </svg>
    )

}

export default StarIcons;