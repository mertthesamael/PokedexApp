import { electric, flying, nature, fire, grass, ground, water, bug, poison, normal, fairy, psychic, fighting, rock, dark, steel, dragon, ice, ghost } from "../../assets/icons/icons"
import "./pokemon-type-icon.scss"
const PokemonTypeIcon = (props) => {
    const icons = {electric: electric(), flying: flying(), nature: nature(), fire: fire(), ground: ground(), water: water(), bug: bug(), poison: poison(), normal: normal(), fairy: fairy(), psychic: psychic(), fighting: fighting(), rock: rock(), dark: dark(), steel: steel(), dragon:dragon(), ice: ice(), ghost:ghost(), grass:grass()}
   
    return(
        <div className={"type-icon "+props.type}>
            <svg width="25" height="25" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            {icons[props.type]}
                </svg>
        </div>
    )

}

export default PokemonTypeIcon;