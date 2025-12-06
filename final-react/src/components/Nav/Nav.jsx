import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
  const {getTotalItems} = useCartContext ();

    return (
    <nav>
      <ul>
           <li>
             <Link to="/">Inicio</Link>
           </li>
           <li>
            <Link to="/category/articulos">Artículos</Link>
           </li>
           

      <li>
       <Link to="/carrito">
          Carrito
         {getTotalItems() > 0 && (
          <span className="in-cart">{getTotalItems()}</span>
         )}
        </Link>
      </li>

      </ul>

    </nav>
    );
};