import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailComponer from './components/ItemDetailComponer';

import Cart from './components/Cart';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Header/>
        <NavBar/>
        
      </header>
      <Switch>
        <Route exact path ="/">
          <ItemListContainer/>
        </Route>
        <Route path ="/producto/:id">
          <ItemDetailComponer/>
        </Route>
        <Route path ="/:categoria">
          <ItemListContainer/>
        </Route>
        <Route exact path ="/cart">
          <Cart/>
        </Route>
        
        </Switch>
    </div>
    </BrowserRouter>
  );

}

export default App;
