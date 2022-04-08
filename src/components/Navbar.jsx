import { Link } from 'react-router-dom';
import './navbar.css';




function Navbar() {
    return ( <div className="container-fluid w-100 navbar">
        <div className="logo">
            <a href="/"> AKSHAT BHATNAGAR</a>
            </div>
        <div className="nav-links">
            <ul>
                <li>
                    <a className="nav-link" href="/">Home</a>
                    </li>
                <li>
                    <a className="nav-link" href="/about">About</a>
                    </li>
                <li>
                    <a className="nav-link" href="/projects">Projects</a>
                    </li>
                <li>
                    <a className="nav-link" href="/contact" >Contact</a>
                    </li>
            </ul>
        </div>
    </div> );
}

export default Navbar;