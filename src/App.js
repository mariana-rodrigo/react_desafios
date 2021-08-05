import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailComponer from './components/ItemDetailComponer';

import Cart from './components/Cart';
import CartProvider from './components/Context'
import {} from './firebase'



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header>
            <Header />
            <NavBar />

          </header>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/producto/:id">
              <ItemDetailComponer />
            </Route>
            <Route path="/:categoria">
              <ItemListContainer />
            </Route>


          </Switch>
        </div>
      </CartProvider>
    </BrowserRouter>
  );

}

export default App;
