import './App.css';
import Menu from "./components/Layouts/Menu/Menu"
import Content from "./components/Layouts/Content/Content"
import {Route, Routes} from "react-router-dom"
import CardsWrapper from "./components/PokemonCard/CardsWrapper"
import PokemonPage from './components/Pages/PokemonPage/PokemonPage';


function App() {





  return (
    <div className="App">
      <Menu />
        <Content>
      <Routes>
        <Route path="/" element={<CardsWrapper></CardsWrapper>}/>
        <Route path=":name" element={<PokemonPage></PokemonPage>}/>
      </Routes>
        </Content>
    </div>
  );
}

export default App;
