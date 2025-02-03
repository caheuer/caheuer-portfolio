import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return <div className="nav">
    <NavLink to="/" className="nav-item">About Me</NavLink>
    <NavLink to="/projects" className="nav-item">Projects</NavLink>
    <NavLink to="/contact" className="nav-item">Social</NavLink>
  </div>;
}