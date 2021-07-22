import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
          <ItemListContainer greetings={'Productos'}/>
        </Route>
        
        </Switch>
    </div>
    </BrowserRouter>
  );

}

export default App;
