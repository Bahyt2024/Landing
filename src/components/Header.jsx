import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />




        </header>
    );
};

export default Header;
