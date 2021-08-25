import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';


import mainMenuLinks from "../data/mainMenuLinks.json";

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            {mainMenuLinks.map((link, key) =>
              <li key={key} className="nav-item">
                <LinkItem link={link}/>
              </li>
            )}
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

LinkItem.propTypes = {
    link: PropTypes.object.isRequired
}

export default Navbar;
