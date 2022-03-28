import './App.css';
import PokemonList from './components/PokemonList'
import Header from './components/Header'
import CardContextProvider from './components/CardContextProvider';
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
      <CardContextProvider>
        <Header />
        <Router>
          
          <Routes>
            <Route path='detail' element={<Detail />}/>
            <Route exact path='/' element={<PokemonList />}/>
            <Route />
          </Routes>
        </Router>
      </CardContextProvider>

  );
}

export default App;
