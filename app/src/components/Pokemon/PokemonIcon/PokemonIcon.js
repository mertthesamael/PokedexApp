import axios from "axios";
import { useEffect, useState } from "react";
import "./icon.css"

const PokemonIcon = (props) => {
 
    return (
        <img src={props.src} className="icon"></img>
    )

}

export default PokemonIcon;