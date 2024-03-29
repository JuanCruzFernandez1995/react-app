import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from './store/cartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

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
                    <Route path="/category/:idCategory" element={<ItemListContainer greeting="Nuestros Productos"/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </div>
              </div>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
