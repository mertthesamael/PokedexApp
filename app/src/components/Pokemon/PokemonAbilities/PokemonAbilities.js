import PokemonPageButton from "../../Buttons/PokemonPageButton"
import "./pokemon-abilities.css"


const PokemonAbilities = (props) => {

    return (
        <div className="pokemon-abilities-wrapper">
        <PokemonPageButton type={props.type} path={props.path} title={props.title}></PokemonPageButton>
        </div>
    )

}

export default PokemonAbilities;