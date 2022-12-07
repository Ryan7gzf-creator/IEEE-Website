import './Navbar.css';
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Logo from '../../assets/IEEE-Logo.svg';

function Navbar() {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggle");

    const navToggle = () => {
        active === 'nav-menu'
            ? setActive('nav-menu nav-active')
            : setActive("nav-menu");

        //  ToggleIcon

        toggleIcon === "nav-toggle"
            ? setToggleIcon("nav-toggle toggle")
            : setToggleIcon("nav-toggle")
    };
    return (
        <nav className="nav">
            <a href="/"><img id="ieee-logo" src={Logo} alt="IEEE-Logo"/></a>
            <ul className={active}>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/">
                        HOME
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/Events">
                        EVENTS
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/Newsletter">
                        NEWSLETTER
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/Membership">
                        MEMBERSHIP
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/OurTeam">
                        OUR TEAM
                    </NavLink>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="first">

                </div>
                <div className="second">

                </div>
                <div className="third">

                </div>
            </div>
        </nav>
    );
}

export default Navbar;