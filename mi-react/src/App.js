import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <div className="container d-md-flex w-100 justify-content-center align-items-center border mt-3 " >
            <div className="row">
              <div className="col-12">
                <Routes>
                  <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />} />
                  <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                </Routes>
              </div>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
