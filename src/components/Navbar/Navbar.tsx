import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSubmenuProductsOpen, setisSubmenuProductsOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const toggleSubmenuProducts = () => {
        setisSubmenuProductsOpen(!isSubmenuProductsOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">React Challenge</div>
            <ul className="navbar-menu">
            <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Contador</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/use-effect" className="navbar-link">useEffect</Link>
                </li>
                <li className="navbar-item">
                    <Link to="#" className="navbar-link" onClick={toggleSubmenuProducts}>
                        Productos
                    </Link>
                    {isSubmenuProductsOpen && (
                        <ul className="submenu">
                            <li className="submenu-item">
                                <Link to="/productos" className="submenu-link">Todos</Link>
                            </li>
                            <li className="submenu-item">
                                <Link to="/productos/accesorios" className="submenu-link">Accesorios</Link>
                            </li>
                            <li className="submenu-item">
                                <Link to="/productos/tecnologia" className="submenu-link">Tecnología</Link>
                            </li>
                            <li className="submenu-item">
                                <Link to="/productos/ropa" className="submenu-link">Ropa</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item">
                    <Link to="#" className="navbar-link" onClick={toggleSubmenu}>
                        PokeAPI
                    </Link>
                    {isSubmenuOpen && (
                        <ul className="submenu">
                            <li className="submenu-item">
                                <Link to="/pokeinfo" className="submenu-link">PokeInfo</Link>
                            </li>
                            <li className="submenu-item">
                                <Link to="/pokelist" className="submenu-link">PokeList</Link>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}