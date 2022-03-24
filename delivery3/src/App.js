import './App.css';
import PokemonList from './components/PokemonList'
import Header from './components/Header'
import CardContextProvider from './components/CardContextProvider';
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  return (
      <CardContextProvider>
        <Header />
        <Router>
          
          <Routes>
          
            <Route exact path='/' element={<PokemonList />}/>
            <Route path='detail' element={<Detail />} />
          </Routes>
        </Router>
      </CardContextProvider>

  );
}

export default App;
