import './App.css';
import Menu from "./components/Layouts/Header/Menu"
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';
import {useState,useEffect} from "react"
import Header from './components/Layouts/Header/Menu';

function App() {
const [text, setText] = useState("")

  return (
    <div className="App">
     <Header></Header>
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
