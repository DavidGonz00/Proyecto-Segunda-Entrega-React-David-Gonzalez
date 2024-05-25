import logo from './Img/Gamingstar.png';
import CartWidget from './CartWidget';
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
  const categories = ["Consolas", "Accesorios", "Juegos", "PC", "Subcripciones"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="110" height="110" className="d-inline-block align-top" />
        </Link>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li className="nav-item" key={index}>
                <NavLink className="nav-link" to={`/category/${category}`}>
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
