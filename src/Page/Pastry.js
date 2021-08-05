import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF,FaTwitter,FaPinterestP,FaSnapchatGhost} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {RiArrowRightSLine} from 'react-icons/ri'
import './Scss/Lunch.scss'

const Pastry = () => {
    return (
        <div className="lunch-container">
            <div className="content">
                <div className="left-content">
                    <div className="post">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2018/06/12/22/29/bread-3471667_960_720.jpg" alt="" />
                        </div>
                        <h2>Apr Superfast Coconut Smoothie Easy To Made</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus. Delectus neque consectetur animi laborum quidem nemo, dignissimos fuga suscipit consequuntur molestias! Doloribus nesciunt, possimus facilis id molestias cumque dicta atque quod consequatur corrupti autem, ab ratione debitis sunt sed...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="post">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
                        </div>
                        <h2>Apr Superfast Coconut Smoothie Easy To Made</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus. Delectus neque consectetur animi laborum quidem nemo, dignissimos fuga suscipit consequuntur molestias! Doloribus nesciunt, possimus facilis id molestias cumque dicta atque quod consequatur corrupti autem, ab ratione debitis sunt sed...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="post">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
                        </div>
                        <h2>Apr Superfast Coconut Smoothie Easy To Made</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ducimus. Delectus neque consectetur animi laborum quidem nemo, dignissimos fuga suscipit consequuntur molestias! Doloribus nesciunt, possimus facilis id molestias cumque dicta atque quod consequatur corrupti autem, ab ratione debitis sunt sed...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
                <div className="right-content">
                    <div className="about-me item">
                        <h4 className="main-title">About Me</h4>
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2014/11/21/00/09/man-539993_960_720.jpg" alt="" />
                        </div>
                        <h3 className="name">Adriana Veloce</h3>
                        <span className="title">Food Blogger</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                    </div>
                    <div className="subscribe item">
                        <h4 className="main-title">Subscribe & follow</h4>
                        <ul>
                            <li><Link to='#'><FaFacebookF /></Link></li>
                            <li><Link to='#'><FaTwitter /></Link></li>
                            <li><Link to='#'><FaPinterestP /></Link></li>
                            <li><Link to='#'><FiMail /></Link></li>
                            <li><Link to='#'><FaSnapchatGhost /></Link></li>
                        </ul>
                    </div>
                    <div className="recipes item">
                    <h4 className="main-title">favorite recipes</h4>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg" alt="" />
                            </div>
                            <h4>Fresh figs with honey cream.</h4>
                        </div>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg" alt="" />
                            </div>
                            <h4>Perfectly Easy Homemade Waffle Recipe Is Here.</h4>
                        </div>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg" alt="" />
                            </div>
                            <h4>Baked Camembert Recipe.</h4>
                        </div>
                    </div>
                    <div className="categories item">
                        <h4 className="main-title">Categories</h4>
                        <div className="category">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" alt="" />
                            </div>
                            <span className="button">Desserts</span>
                        </div>
                        <div className="category">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" alt="" />
                            </div>
                            <span className="button">Breakfast</span>
                        </div>
                        <div className="category">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" alt="" />
                            </div>
                            <span className="button">Pastry</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pastry
