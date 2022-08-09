import "./pokemon-stats.css"
import { firstLetterUpper } from "../../store/context";
const PokemonStats = (props) => {

    let color = props.type
   

    return (
        <div className="">
            <div className="stats-and-progressbar">

                <div className="pokemon-stat-info">
                    <h2>{firstLetterUpper(props.statName.split('-').join(' '))}</h2>
                   
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