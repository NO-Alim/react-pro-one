import React from 'react'
import './Scss/Recipes.scss'

const Recipes = () => {
    return (
        <div>
            <div className="recipes-container">
                <div className="recipes">
                    <h1 className="sec-heading">Most Popular Recipes.</h1>
                    <div className="recipes-content">
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" alt="" />
                            </div>
                            <div className="content">
                                <span className="date">12 appril, 2021</span>
                                <h2>Superfast Coconut Smoothie For Healthy Breakfast Every Morning</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad vel explicabo quisquam, unde, eius reprehenderit voluptatibus doloremque adipisci eos facere saepe, a sit maxime. Id possimus deleniti illo nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, velit.</p>
                            </div>
                        </div>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_960_720.jpg" alt="" />
                            </div>
                            <div className="content">
                                <span className="date">12 appril, 2021</span>
                                <h2>Perfectly Easy Homemade Waffle Recipe Is Here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad vel explicabo quisquam, unde, eius reprehenderit voluptatibus doloremque adipisci eos facere saepe, a sit maxime. Id possimus deleniti illo nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, velit.</p>
                            </div>
                        </div>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg" alt="" />
                            </div>
                            <div className="content">
                                <span className="date">12 appril, 2021</span>
                                <h2>Baked Camembert Recipe And How To Decorate The Table</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad vel explicabo quisquam, unde, eius reprehenderit voluptatibus doloremque adipisci eos facere saepe, a sit maxime. Id possimus deleniti illo nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, velit.</p>
                            </div>
                        </div>
                        <div className="recipe">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg" alt="" />
                            </div>
                            <div className="content">
                                <span className="date">12 appril, 2021</span>
                                <h2>Whole Roast Turbot With Clams, Fennel And Potatoes</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad vel explicabo quisquam, unde, eius reprehenderit voluptatibus doloremque adipisci eos facere saepe, a sit maxime. Id possimus deleniti illo nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes
