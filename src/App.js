import './App.css';
// importing react-router-dom for making spa
import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbr from './components/Navbr';
// importing store
import { store } from './store/store';
// importing provider
import { Provider } from 'react-redux';


function App() {
  return (
    <>
    <Provider store={store}>
      <Navbr/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>
    </Routes>
      </Provider>
    </>
  );
}

export default App;
