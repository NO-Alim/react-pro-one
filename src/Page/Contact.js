import React from 'react'
import './Scss/Contact.scss'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="book-container">
                <h2>My CookBooks</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit optio eaque asperiores sunt, molestias non enim magni illum animi cumque soluta deserunt necessitatibus eius neque officia. Esse obcaecati ipsum quis?</p>
                <div className="img-container">
                    <img src="https://cdn.pixabay.com/photo/2017/08/16/07/42/bloggers-2646750_960_720.png" alt="" />
                </div>
                <button>Order Now </button>
            </div>
            <div className="contact-form">
                <h2>Contact Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui libero ipsum voluptatum dolore ipsam earum ipsa nostrum consequuntur expedita iste, provident id quasi explicabo hic incidunt tenetur eligendi molestiae harum consequatur. Sed, beatae. Labore atque nihil consectetur quasi doloremque illo harum incidunt hic officiis quibusdam ducimus, velit, voluptatem non accusantium.</p>
                <form>
                    <div className="address">
                        <input type="text" name="name" placeholder="Your Name" />
                        <input type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="message">
                        <textarea name="message" placeholder="Write a message"></textarea>
                    </div>
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
