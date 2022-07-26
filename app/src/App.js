import './App.css';
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import {useState,useEffect} from "react"
import Header from './components/Layouts/Header/Menu';

function App() {
const [text, setText] = useState("")


const [color, setColor] = useState([""])

const getColor = (color) => {

return setColor(color)
}

  return (

    <div className="App">

     <Header color={color}></Header>

        <Content>

      <Routes>

        <Route path="/" element={<CardsWrapper input={text}></CardsWrapper>}/>

        <Route path=":name" element={<PokemonPage onSwitchPokemon={getColor}></PokemonPage>}/>

      </Routes>

        </Content>

    </div>
  );
}

export default App;
