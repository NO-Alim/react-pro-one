import React from 'react'
import { useHistory } from 'react-router-dom'
import './Scss/SingleBlog.scss'

const SingleBlog = () => {
    const location = useHistory();
    return (
        <div className="singleBlog-container">
            <h1>Easy Breakfast Meal</h1>
            <div className="img-container">
                <img src="https://cdn.pixabay.com/photo/2017/12/04/17/17/chicken-2997406_960_720.jpg" alt="" />
            </div>
            <div className="content">
                <h2>Directions</h2>
                <span>step1</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat provident quae consectetur harum quis ex, ipsam tenetur nulla! Quam non, omnis tempore porro corporis fugiat illo obcaecati! Odit dolores asperiores dolore accusamus non exercitationem rem iste reiciendis! Ducimus placeat reiciendis dolorem, tempora suscipit ex quidem animi repudiandae quis ipsam. Ut!</p>
                <span>step2</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quidem, cum suscipit molestias sint itaque odio mollitia enim veritatis voluptas.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quibusdam corrupti eos quae inventore odio atque vero necessitatibus, quasi sit distinctio quos quod neque ipsa!</p>
                <strong className="special">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam molestias quos fugit nisi libero quam!</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure doloremque neque aliquam ab itaque fuga minima laborum cumque, expedita suscipit inventore mollitia! Eaque fugit natus, deserunt doloremque optio facere beatae ducimus quasi modi sapiente libero, ex explicabo aspernatur animi.</p>
                <button onClick={() => location.push('/')}>Back To Home</button>
            </div>
        </div>
    )
}

export default SingleBlog
