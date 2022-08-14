import "./pokemon-stats.scss"

const PokemonBaseStats = (props) => {
let color = props.type

    return(
        <div className="pokemon-base-stats">

            {props.data && props.data.map(stat => <div key={stat.stat.name}className="pokemon-stats__statitem" style={{width: 'auto'}}>

            <h2>{stat.stat.name.split("-").join(" ")}</h2><div className="pokemon-stats__statitem__progressbar"><div className={"pokemon-stats__statitem__progressbar__loaded "+ color}style={{width: stat.base_stat+'%', boxShadow: 'none'}}>{stat.base_stat}</div></div>

            </div>)}
    
        </div>
    )


}

export default PokemonBaseStats;