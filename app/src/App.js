import Header from './components/Layouts/Header/Header';
import './App.scss';
import Body from './components/Layouts/Body/Body';
import { Route, Routes } from 'react-router-dom';
import PokemonCardWrapper from './components/PokemonCard/PokemonCardWrapper';
import PokemonPage from "./Pages/PokemonPage/PokemonPage"
import { PokemonsContextWrapper } from './store/context';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  const pokemon=require("pokemon").all()
  const pokemonNames = pokemon.map(names  => names.toLowerCase())
  const keygen = require("keygenerator")


  return (
    <div className="App">

    <PokemonsContextWrapper>

      <Header/>

      <Body>

        <Routes>

          <Route path="/" element={<PokemonCardWrapper/>}/>

          {pokemonNames.map(pokemon =>  <Route key={keygen._()} path={'/'+pokemon} element={<PokemonPage />}/>)}

          <Route path={'/'+pokemon} element={<PokemonPage />}/>

          <Route path="*" element={<NotFound />}/>

        </Routes>

      </Body>

      </PokemonsContextWrapper>  

    </div>
  );
}

export default App;
