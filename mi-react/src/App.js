import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="mainContainer container border mt-5">
          <ItemListContainer greeting="Greeting" />
          
        </div>
      </main>
    </div>
  );
}

export default App;
