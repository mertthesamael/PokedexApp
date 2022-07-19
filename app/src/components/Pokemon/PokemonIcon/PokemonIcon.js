import "./icon.css"

const PokemonIcon = (props) => {

    return (
        <div className="icon-wrap"><img src={props.src} className="icon"></img></div>
    )

}

export default PokemonIcon;