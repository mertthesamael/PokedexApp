import "./pokemon-stats.css"


const PokemonStats = (props) => {

    return (
        <div className="pokemon-stats-wrapper">
            <div className="pokemon-stat-info">
            <h2>{props.statName}</h2>
            <h2>{props.statValue}</h2>
            </div>
            <div className="stat-bar">
            <div className="pokemon-stat-bar" style={{width : `${props.statValue}%`}}></div>
            </div>
        </div>
    )

}

export default PokemonStats;