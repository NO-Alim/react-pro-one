import React from 'react'
import Category from '../component/Category'
import Header from '../component/Header'
import Recipes from '../component/Recipes'
import SubCategory from '../component/SubCategory'
import VideoPlayer from '../component/VideoPlayer'

const Home = () => {
    return (
        <div>
            <Header />
            <Category />
            <Recipes />
            <VideoPlayer />
            <SubCategory />
        </div>
    )
}

export default Home
