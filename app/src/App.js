import './App.css';
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import React, {useState} from "react"
import Header from './components/Layouts/Header/Header';
import FavoriteCards from './components/PokemonCard/FavoriteCards';
import { TriggerContext } from './components/store/context';

function App() {
const [text, setText] = useState("")

const [color, setColor] = useState([""])

const getColor = (color) => {

setColor(color)

}

const handleText = (event) => {
  event.preventDefault()
  setText(event.target.value.toLowerCase())
}

let favoriPoke=[]

const getData = (x) => {
  favoriPoke.push(x)
 
 localStorage.setItem('fav', JSON.stringify(favoriPoke))
}

const [state, setState] = useState(false)

const stateHandler = () => {
    setState(!state)
  }

  return (
  
    <div className="App">

      <React.StrictMode>

    <TriggerContext.Provider value={{state: state}}>

     <Header color={color}  onSearch={handleText} stateHandler={stateHandler}></Header>

        <Content state={state} setTrigger={setState}>

      <Routes>

        <Route path="/" element={<CardsWrapper getData={getData}input={text}></CardsWrapper>}/>

        <Route path=":name" element={<PokemonPage state={state} setState={stateHandler} onSwitchPokemon={getColor}></PokemonPage>}/>

        <Route path="/favorites" element={<FavoriteCards favorites={favoriPoke}></FavoriteCards>}></Route>

      </Routes>

        </Content>
      </TriggerContext.Provider>

      </React.StrictMode>
    </div>
  );
}

export default App;
