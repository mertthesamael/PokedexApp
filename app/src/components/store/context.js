import React from "react"

const TriggerContext = React.createContext({
    state: false
})


const firstLetterUpper = (x) =>{
    
    return x.charAt(0).toUpperCase() + x.slice(1)
    
}


export { firstLetterUpper, TriggerContext};