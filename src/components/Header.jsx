import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />

            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/blogs">Blogs</Link>
            </nav>

            <div className="right-section">
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <div className="register-button">
                    <Link to="/register">
                        <button className="btn">Register</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
