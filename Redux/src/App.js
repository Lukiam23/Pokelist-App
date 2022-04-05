import PokemonList from './components/PokemonList'
import Header from './components/Header'
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  
  return (

      <Provider store={store}>
        <Router>
        <Header />
          
          <Routes>
            
            <Route exact path='/' element={<PokemonList />}/>
            <Route path='detail' element={<Detail />} />
          </Routes>
        </Router>
      </Provider>

  );
}

export default App;
