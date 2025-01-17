import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return <div className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Me</NavLink>
    </div>;
}