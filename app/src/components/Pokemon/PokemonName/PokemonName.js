import "./pokemon-name.css"


const PokemonName = (props) => {
    let pokemonName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    return (
    <>{pokemonName}</>
    )

}

export default PokemonName;