import './App.css';
import Loadable from 'react-loadable';

import Header from './components/Header'
import CardContextProvider from './components/CardContextProvider';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const LoadablePokemonList = Loadable({
  loader: () => import('./components/PokemonList'),
  loading(){ return <h1>Loading</h1>}
})

const LoadableDetail = Loadable({
  loader: () => import('./components/Detail'),
  loading(){ return <h1>Loading</h1>}
})

function App() {
  
  return (
      <CardContextProvider>
        <Router>
        <Header />
          
          <Routes>
            
            <Route exact path='/' element={<LoadablePokemonList />}/>
            <Route path='detail' element={<LoadableDetail />} />
          </Routes>
        </Router>
      </CardContextProvider>

  );
}

export default App;
