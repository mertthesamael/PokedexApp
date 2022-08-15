import "./pokemon-details.scss"
import React from "react"
const PokemonDetails = (props) => {
    
    let keygen = require("keygenerator")

    return(
        <div className="pokemon-details-wrapper">

           <h1>{props.title}</h1>

                <div className="pokemon-details-wrapper__details">

                    {props.data&&props.data.map( title => 
                    <div key={keygen._()} style={{display:'flex'}}>

                        <div key={keygen._()} className="pokemon-details-wrapper__details__titles">

                        {Object.keys(title).map(x=> <h2 key={keygen._()}>{x.split('_').join(" ")} : </h2>)}

                        </div>

                        <div key={keygen._()}className={"pokemon-details-wrapper__details__values "+props.type} style={{background: 'none', boxShadow: 'none'}}>

                        {Object.values(title).map(value=> <h2 key={keygen._()} style={{display: 'flex', flexDirection:'column'}}>{value}</h2>)}

                    </div>
                    
                </div>
                    
                    )}


                </div>
        </div>
    )

}


export default PokemonDetails;