import React from 'react'
import {NavLink} from 'react-router-dom'
import './Scss/Navbar.scss'
import {FaFacebookF,FaTwitter,FaSearch} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <div className="menu-container">
                        <div className="menu">
                            <span><FiMenu /></span>
                        </div>
                    </div>
                    <div className="logo-container">
                        <div className="logo">
                            <a href=""><span>LE</span>Bridge</a>
                        </div>
                    </div>
                    <div className="link-container">
                        <div className="links">
                            <ul>
                                <li>
                                    <NavLink exact to="/">Home <span></span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/about">About <span></span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/contact">Contact <span></span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/lunch">Lunch <span></span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/pastry">Pastry <span></span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/seafood">Seafood <span></span></NavLink>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-container">
                        <div className="social-media">
                            <ul>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                        <div className="search-container">
                            <form>
                                <input type="text" name="search" />
                                <button><FaSearch /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
