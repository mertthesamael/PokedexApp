import Header from './components/Layouts/Header/Header';
import './App.scss';
import Body from './components/Layouts/Body/Body';
import { Route, Routes } from 'react-router-dom';
import PokemonCardWrapper from './components/PokemonCard/PokemonCardWrapper';
import PokemonPage from "./components/Pages/PokemonPage"
import { useState } from 'react';
import { PokemonsContext } from './store/context';

function App() {
const [color, setColor] = useState("")
const [text, setText] = useState("")

  const getType = (type) =>{
    setColor(type)
  }

  const handleText = (event) => {

    return setText(event.target.value.toLowerCase())

  }
 

  return (
    <div className="App">
    <PokemonsContext.Provider value={{pokemons:60}}>
      <Header onSearch={handleText} color={color}/>
      <Body>
        <Routes>
          <Route path="/" element={<PokemonCardWrapper input={text} />}/>
          <Route path="/:name" element={<PokemonPage onMainType={getType} />}/>
        </Routes>
      </Body>
      </PokemonsContext.Provider>  
    </div>
  );
}

export default App;
