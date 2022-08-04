import "./pokemon-stats.css"

const PokemonStats = (props) => {

    let color = "";
    if(props.type === "electric"){
        color="yellow"
    }else if (props.type==="poison"){
        color="purple"
    }
    else if (props.type==="grass"){
        color="green"
    }else if (props.type==="bug"){
        color="green"
    }
    else if (props.type==="fire"){
        color="red"
    }else if (props.type==="water"){
        color="blue"
    }else if (props.type==="ice"){
        color="blue"
    }else if (props.type==="normal"){
        color="normal"
    }else if (props.type==="fairy"){
        color="pink"
    }else if (props.type==="dragon"){
        color="blue"
    }else if (props.type==="fighting"){
        color="red"
    }else if (props.type==="ground"){
        color="normal"
    }else if (props.type==="psychic"){
        color="red"
    }else if (props.type==="ghost"){
        color="purple"
    }
    


    return (
        <div className="">
            <div className="stats-and-progressbar">

                <div className="pokemon-stat-info">
                    <h2>{props.statName}</h2>
                   
                </div>
                <div className="stat-bar-wrapper">
                    <div className="stat-bar-full">
                        <div className={"stat-bar-bg "+color} style={{width : `${props.statValue}%`}}>
                    <div className="pokemon-stat-bar" style={{width : '100%'}}>
                        <span className="stat-numb">{props.statValue}</span>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PokemonStats;