import { electric, flying, nature, fire, ground, water, bug, poison, normal, fairy, psychic, fighting, rock, dark, steel, dragon, ice, ghost,grass } from "../../assets/icons/icons"
import "./pokemon-type-icon.scss"


const PokemonpageTypeIcon = (props) =>{
const icons = {electric: electric(), flying: flying(), nature: nature(), fire: fire(), ground: ground(), water: water(), bug: bug(), poison: poison(), normal: normal(), fairy: fairy(), psychic: psychic(), fighting: fighting(), rock: rock(), dark: dark(), steel: steel(), dragon:dragon(), ice: ice(), ghost:ghost(), grass: grass()}
   
    return(
        <div className={"pokemonpage-type-icon "+props.types} style={{color: 'white'}}>
            <div className="pokemonpage-type-icon__type">
                {props.types}
            </div>
            <div className="pokemonpage-type-icon__icon">
            <svg width="25" height="25" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">

                {icons[props.types]}
                </svg>
            </div>

        </div>
    )


}

export default PokemonpageTypeIcon;