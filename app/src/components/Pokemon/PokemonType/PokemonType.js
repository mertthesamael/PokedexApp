import "./pokemon-type.css"

const PokemonType = (props) =>{

    let typeClass = props.type;

    return (
        <div className={"pokemon-type " + typeClass}>{(props.type).toUpperCase()}</div>
    )

}

export default PokemonType;