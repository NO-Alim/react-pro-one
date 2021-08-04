import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaPinterestP,FaSnapchatGhost} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import './Scss/Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo-container">
                    <div className="logo">
                        <a href=""><span>LE</span>Bridge</a>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="social-container">
                    <ul>
                        <li><Link to='#'><FaFacebookF /></Link></li>
                        <li><Link to='#'><FaTwitter /></Link></li>
                        <li><Link to='#'><FaPinterestP /></Link></li>
                        <li><Link to='#'><FiMail /></Link></li>
                        <li><Link to='#'><FaSnapchatGhost /></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-container">
                <p>Copyright &copy; xyz 2021.</p>
            </div>
        </footer>
    )
}

export default Footer
