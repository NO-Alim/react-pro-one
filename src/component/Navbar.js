import React, { useRef, useState, useEffect } from 'react'
import {NavLink, useHistory,Link} from 'react-router-dom'
import './Scss/Navbar.scss'
import {FaFacebookF,FaTwitter,FaSearch} from 'react-icons/fa'
import {FiMenu,FiChevronsLeft} from 'react-icons/fi'
import Headroom from 'react-headroom'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useWindowWidth } from '@react-hook/window-size'

const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
    list: {
        width: 'auto',
      },
      fullList: {
        width: 'auto',
      },
      drawerPaper : {
          width: 'auto',
          background: "transparent",
      }
  });


const Navbar = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useHistory();
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const width = useWindowWidth();

    const toggleDrawer = () =>{
        setDrawerOpen(!drawerOpen);
    }

    const handleClick = (e) => {
        if (!menuBtnRef.current.contains(e.target)) {
            if (!menuRef.current.contains(e.target)) {
                setDrawerOpen(false);
            }
        }
    }

    const mediaWidth = () =>{
        if (width > 900) {
            setDrawerOpen(false);
        }
    }

    useEffect(() => {
        mediaWidth();
        return () =>{
            mediaWidth()
        }
  },[width]);

    useEffect(() =>{
        document.addEventListener('click', handleClick);
        return () =>{
            document.removeEventListener('click', handleClick);
        }
      })

    return (
            <div>
                <Headroom>
                <nav>
                    <div className="nav-container">
                        <div className="menu-container">
                            <div className="menu">
                                <span onClick={() => toggleDrawer()} ref={menuRef}><FiMenu /></span>
                            </div>
                        </div>
                        <div className="logo-container">
                            <div className="logo">
                                <Link to="/"><span>LE</span>Bridge</Link>
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
                </Headroom>
                <Drawer className={classes.list}
                palette="secondary"
                variant="persistent"
                open={drawerOpen}
                anchor="left"
                classes={{paper: classes.drawerPaper}}>
                    <div className="drawer-container menu-drawer">
                        <div className="drawer-btn-container">
                            <button onClick={() => setDrawerOpen(false)} className="close-btn" ref={menuBtnRef}><FiChevronsLeft /></button>
                        </div>
                        <div className="logo-container">
                            <div className="logo">
                                <Link to="/"><span>LE</span>Bridge</Link>
                            </div>
                        </div>
                        <div className="link-container">
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
            </Drawer>
            </div>
    )
}

export default Navbar
