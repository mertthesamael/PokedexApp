import PokemonInfo from "../../PokemonInfo/PokemonInfo";


const PokemonStatItem = (props) => {

    return(
        <div className="stat-item">

        <h1>{props.statName}</h1>

        <PokemonInfo content={props.content}/>

        </div>
    )

}

export default PokemonStatItem;