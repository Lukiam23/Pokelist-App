import './App.css';
import PokemonList from './components/PokemonList'
import Header from './components/Header'
import CardContextProvider from './components/CardContextProvider';


function App() {
  return (
      <CardContextProvider>
        <Header />
        <PokemonList />
      </CardContextProvider>

  );
}

export default App;
