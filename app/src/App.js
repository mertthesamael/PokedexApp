import Header from './components/Layouts/Header/Header';
import './App.css';
import Body from './components/Layouts/Body/Body';
import { Route, Routes } from 'react-router-dom';
import PokemonCardWrapper from './components/PokemonCard/PokemonCardWrapper';
import PokemonPage from "./components/Pages/PokemonPage"
import { useState } from 'react';
import { PokemonsContext } from './store/context';

function App() {
const [color, setColor] = useState("")
const [pokemonNames, setPokemonNames] = useState("")

  const getType = (type) =>{
    setColor(type)
  }
  const getPokemons = (x)=>{
    setPokemonNames(x)
  }


  return (
    <div className="App">
    <PokemonsContext.Provider value={{pokemons:pokemonNames}}>
      <Header color={color}/>
      <Body>
        <Routes>
          <Route path="/" element={<PokemonCardWrapper onSetPokemons={getPokemons}/>}/>
          <Route path="/:name" element={<PokemonPage onMainType={getType} />}/>
        </Routes>
      </Body>
      </PokemonsContext.Provider>  
    </div>
  );
}

export default App;
