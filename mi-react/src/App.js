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
        <div className="container d-md-flex w-100 justify-content-center align-items-center border mt-3 " >
          <div className="row">
            <div className="col-12">
              <ItemListContainer greeting="Nuestros Productos" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
