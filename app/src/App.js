import Header from './Layouts/Header/Header';
import './App.scss';
import Body from './Layouts/Body/Body';
import { Route, Routes } from 'react-router-dom';
import PokemonCardWrapper from './components/PokemonCard/PokemonCardWrapper';
import PokemonPage from "./Pages/PokemonPage/PokemonPage"
import { PokemonsContextWrapper } from './store/context';
import NotFound from './Pages/NotFound/NotFound';
import Favorites from './Pages/Favorites/Favorites';
function App() {
  const pokemon=require("pokemon").all()
  const pokemonNames = pokemon.map(names  => names.toLowerCase())
  const keygen = require("keygenerator")
  console.log(pokemonNames)

  console.log('Oh hello developer. Do not forget to drink water at least 2L a day ! :) Also my fav Pokémon is Snorlax !')

  return (
    <div className="App">

    <PokemonsContextWrapper>

      <Header/>

      <Body>

        <Routes>

          <Route path="/" element={<PokemonCardWrapper/>}/>

          {pokemonNames.map(pokemon =>  <Route key={keygen._()} path={'/'+pokemon} element={<PokemonPage />}/>)}

          <Route path='/favorites' element={<Favorites></Favorites>}/>

          <Route path="/:name" element={<PokemonPage />}/>

        </Routes>

      </Body>

      </PokemonsContextWrapper>  

    </div>
  );
}

export default App;
