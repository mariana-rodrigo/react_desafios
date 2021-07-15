import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        
      </header>
     
        <ItemListContainer greetings={'Productos'}/>
        <ItemCount/> 
      
    </div>
  );

}

export default App;
