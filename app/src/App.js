import './App.css';
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import React, {useState} from "react"
import Header from './components/Layouts/Header/Header';
import FavoriteCards from './components/PokemonCard/FavoriteCards';

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

function getData (x){
  favoriPoke.push(x)
 
 localStorage.setItem('fav', JSON.stringify(favoriPoke))
}

const [state, setState] = useState(false)
function stateHandler () {
    setState(!state)
  }

  return (

    <div className="App">
      <React.StrictMode>

     <Header color={color} onSearch={handleText} stateHandler={stateHandler}></Header>

        <Content state={state} setTrigger={setState}>

      <Routes>

        <Route path="/" element={<CardsWrapper getData={getData}input={text}></CardsWrapper>}/>

        <Route path=":name" element={<PokemonPage onSwitchPokemon={getColor}></PokemonPage>}/>

        <Route path="/favorites" element={<FavoriteCards favorites={favoriPoke}></FavoriteCards>}></Route>

      </Routes>

        </Content>

      </React.StrictMode>
    </div>
  );
}

export default App;
