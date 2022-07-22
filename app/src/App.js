import './App.css';
import Menu from "./components/Layouts/Menu/Menu"
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import {useState,useEffect} from "react"

function App() {
const [text, setText] = useState("")

  return (
    <div className="App">
      <Menu>
        <Routes>
        <Route path="/" element={<input type="text" onChange={(x) => setText(x.target.value)}></input>}/>
        
        </Routes>
      </Menu>
        <Content>
      <Routes>
        <Route path="/" element={<CardsWrapper input={text}></CardsWrapper>}/>
        <Route path=":name" element={<PokemonPage ></PokemonPage>}/>
      </Routes>
        </Content>
    </div>
  );
}

export default App;
