import {NavLink} from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
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
        </ul>
    </nav>
);

export default Navbar;
