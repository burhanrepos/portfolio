import { Link } from "react-router-dom";
import "../pages/Menu.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Menu = ({ page }) => {
    const [showNavBar, setNavBar] = useState(false);
    return (
        <div className="home__header">
            <div className="home__headerLeft">
                <h1 className="brand__name">Burhan Shaheen</h1>
            </div>
            <div className="home__headerRight">
                
                <div className={showNavBar ? "desktop-link mobile-link" : "desktop-link"}>
                    {/* <Link to="/" style={{ color: page === "home" ? "crimson" : "" }}>Home</Link> */}
                    <a href="/portfolio" style={{ color: page === "about" ? "crimson" : "" }}>About</a>
                    <a href="/portfolio/services" style={{ color: page === "services" ? "crimson" : "" }}>Services</a>
                    <a href="/portfolio/projects" style={{ color: page === "projects" ? "crimson" : "" }}>Projects</a>
                    <a href="/portfolio/contact" style={{ color: page === "contact" ? "crimson" : "" }}>Contact</a>
                </div>
                <div className="hamburger-menu">
                <a href="#" onClick={() => setNavBar(!showNavBar)}>
                    <GiHamburgerMenu size={35} style={{ color: 'white' }} />
                </a>
            </div>
            </div>
            
        </div>
    );
}
export default Menu;