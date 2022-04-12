import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logos/logo.png";

let activeStyle = {
    color: "#9900F0",
};

const Header = () => {
    return (
        <div className="w-4/5 mx-auto">
            <nav className="flex justify-between items-center">
                <img src={logo} alt="logo" />
                <div className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-purple-500" : undefined
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "text-purple-500" : undefined
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/Checkout"
                        className={({ isActive }) =>
                            isActive ? "text-purple-500" : undefined
                        }
                    >
                        Checkout
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-purple-500" : undefined
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive ? "text-purple-500" : undefined
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;
