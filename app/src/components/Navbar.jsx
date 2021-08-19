import {NavLink} from "react-router-dom";

import mainMenuLinks from "../data/mainMenuLinks.json";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
<<<<<<< HEAD
            <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/create" className="nav-link" activeClassName="active">Crear</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/table" className="nav-link" activeClassName="active">Table</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/appointments" className="nav-link" activeClassName="active">Appointments</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/todos" className="nav-link" activeClassName="active">To-do List</NavLink>
            </li>
=======
            {mainMenuLinks.map((link, key) =>
              <li key={key} className="nav-item">
                <LinkItem link={link}/>
              </li>
            )}
>>>>>>> 83a86afac49474a7eda1b852d179c073f7898bbe
        </ul>
    </nav>
);

const LinkItem = ({ link }) => (
    <NavLink
        exact to={link.to}
        className="nav-link"
        activeClassName={ link.active ? "active" : ""}>
            {link.linkText}
    </NavLink>
)

// TODO: propTypes for LinkItem

export default Navbar;
