import { useContext } from "react";
import { PokemonsContext } from "../../store/context";
import PokemonMoves from "../../components/PokemonMoves/PokemonMoves";
import Popup from "../Popup/Popup";
import "./body.scss"
const Body = (props) => {

 const ctx = useContext(PokemonsContext)
 const closePopup = () => {
     ctx.onChangeInfoState(false)
     ctx.onChangeMoveState(false)
    }
    
    
    return(
        
        <div className="body">
        {props.children}
        {ctx.infoState &&
            <Popup>
        <div style={{width:'25rem', display: 'flex', flexDirection: 'column'}}>
        <p>I grew up by watching Pokémon on my grandma's television and always wanted to have a "Pokédex" for my own. Thats why i choose this project. I am <a target={"_blank"} style={{textDecoration:'none'}} rel="noreferrer" href="https://github.com/mertthesamael">Merto</a> and this is my first ReactJS project.</p>
        <p>This is the project that i made in order to complate Kodluyoruz 2022 ReactJS Bootcamp</p>
        <p>This aweseome design is belongs to <a  href="https://github.com/HybridShivam" rel="noreferrer" target="_blank" style={{textDecoration:'none'}}>@HybridShivam</a>. Please visit the original version of this site that i cloned. <a href="https://hybridshivam.com/pokedex/pokemon" rel="noreferrer"target="_blank" style={{textDecoration:'none'}}>Pokédex</a></p>
        <p>Also big thanks to <a target="_blank" rel="noreferrer" style={{textDecoration:'none'}} href="https://github.com/PokeAPI/pokeapi">PokéApi.v2</a> for data and <a target={"_blank"} rel="noreferrer" style={{textDecoration:'none'}} href="https://github.com/duiker101/pokemon-type-svg-icons">@duiker101</a> for amazing svg type icons.</p>
        <p>And also, this is a fan made clone project and do not have any connection with Pokémon Company. No copyright infringement intended.</p>
        
        <p>“The important thing is not how long you live. It’s what you accomplish with your life.” — Grovyle</p>
        <button className="close-btn" onClick={closePopup}>CLOSE</button>
        </div>
        </Popup>
        
    }{ctx.moveState&&
        <Popup>
        
        <PokemonMoves data={props.moves} type={ctx.color}/>
        <button className="close-btn" onClick={closePopup}>CLOSE</button>
        
        </Popup>
        
    }
    </div>
    )
    
}

export default Body;