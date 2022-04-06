import Home from './components/Home'
import Header from './components/Header'
import Detail from './components/Detail';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  
  return (

      <Provider store={store}>
        <Router>
        <Header />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='detail' element={<Detail />} />
          </Routes>
        </Router>
      </Provider>

  );
}

export default App;
