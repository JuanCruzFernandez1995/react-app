import CartWidget from "./CartWidget"; 

function NavBar() {
    return (
      <div className="navBar">
          <h1>
              E-commerce React
          </h1>
          <ul>
            <CartWidget />
            <li>
                <a href="Home">
                  Home
                </a>
            </li>
            <li>
                <a href="Products">
                  Products
                </a>
            </li>
            <li>
                <a href="About us">
                    About us
                </a>
            </li>
            <li>
                <a href="Contact">
                  Contact
                </a>
            </li>
          </ul>
          
      </div>
    );
  }

  export default NavBar;