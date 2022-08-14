import Header from './components/Layouts/Header/Header';
import './App.scss';
import Body from './components/Layouts/Body/Body';
import { Route, Routes } from 'react-router-dom';
import PokemonCardWrapper from './components/PokemonCard/PokemonCardWrapper';
import PokemonPage from "./Pages/PokemonPage/PokemonPage"
import { useContext, useState } from 'react';
import { PokemonsContext } from './store/context';
import NotFound from './Pages/NotFound/NotFound';
function App() {
  let pokemon=require("pokemon").all()
  const pokemonNames = pokemon.map(names  => names.toLowerCase())
  let keygen = require("keygenerator")
  const ctx = useContext(PokemonsContext)
const [color, setColor] = useState("")
const [text, setText] = useState("")
const [infoState, setInfoState] = useState(false)
  const getType = (type) =>{
    setColor(type)
  }

const InfoStateHandler = (state) => {

    setInfoState(state)

}
  
  const handleText = (event) => {

    return setText(event.target.value.toLowerCase())

  }
 
  return (
    <div className="App">
    <PokemonsContext.Provider value={{infoState:infoState}}>
      <Header state={InfoStateHandler}onSearch={handleText} color={color}/>
      <Body onCloseAction={InfoStateHandler}>
        <Routes>
          <Route path="/" element={<PokemonCardWrapper input={text} />}/>
          {pokemonNames.map(pokemon =>  <Route key={keygen._()} path={'/'+pokemon} element={<PokemonPage onMainType={getType} />}/>)}
          <Route path={'/'+pokemon} element={<PokemonPage onMainType={getType} />}/>
          <Route path="*" element={<NotFound />}/>

          
        </Routes>
      </Body>
      </PokemonsContext.Provider>  
    </div>
  );
}

export default App;
