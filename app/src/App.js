import './App.css';
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import {useState,useEffect} from "react"
import Header from './components/Layouts/Header/Menu';
import FavoriteCards from './components/PokemonCard/FavoriteCards';

function App() {
const [text, setText] = useState("")


const [color, setColor] = useState([""])

const getColor = (color) => {

return setColor(color)
}
const handleText = (event) => {
  setText(event.target.value.toLowerCase())
}

let favoriPoke=[]
function getData (x){
    favoriPoke.push(x)

return  localStorage.setItem('fav', JSON.stringify(favoriPoke))
}
  return (

    <div className="App">
      
     <Header color={color} onSearch={handleText}></Header>

        <Content>

      <Routes>

        <Route path="/" element={<CardsWrapper getData={getData}input={text}></CardsWrapper>}/>

        <Route path=":name" element={<PokemonPage onSwitchPokemon={getColor}></PokemonPage>}/>

        <Route path="/favorites" element={<FavoriteCards></FavoriteCards>}></Route>

      </Routes>

        </Content>

    </div>
  );
}

export default App;
