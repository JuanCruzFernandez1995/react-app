import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"; 

function NavBar() {
    return (
      <div className="navBar">
          <h1>
              E-commerce React
          </h1>
          <ul className="d-flex align-items-center">
            <li>
              <Link to="/cart"> 
                <CartWidget /> 
              </Link>
            </li>
            <li>
                <Link to="/">
                  Home
                </Link>
            </li>
            <li>
                <Link to="/nosotros">
                    Nosotros
                </Link>
            </li>
            <li>
                <Link to="/contacto">
                  Contacto
                </Link>
            </li>
            <li>
                <Link to="category/cerveza">
                  Cerveza
                </Link>
            </li>
            <li>
                <Link to="category/ginebra">
                  Gines
                </Link>
            </li>
          </ul>
          
      </div>
    );
  }

  export default NavBar;