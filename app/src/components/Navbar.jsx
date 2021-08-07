import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/create" className="nav-link" activeClassName="active">Crear</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/Ejercicio" className="nav-link" activeClassName="active">Table</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/recipes" className="nav-link" activeClassName="active">Recipes</NavLink>
                </li>
            </ul>
        </nav>
    )
}
