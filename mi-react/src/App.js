import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './store/cartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
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
                    <Route path="/category/:category" element={<ItemListContainer greeting="Nuestros Productos"/>} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
