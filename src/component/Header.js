import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Scss/Header.scss'
import {RiArrowLeftSLine,RiArrowRightSLine} from 'react-icons/ri'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};
const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <Carousel interval={5000} autoPlay={true} showThumbs={false} showStatus={false}  infiniteLoop={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button className="arrow" type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                        <RiArrowLeftSLine />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button className="arrow" type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                        <RiArrowRightSLine />
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                className="indicator active"
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            className="indicator"
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}>
                    
                    <div className='carousel-item item-one'>
                        <div className="carousel-content">
                            <Fade right>
                                <h1>Creamy Spicey Hatch Green</h1>
                            </Fade>
                            <Fade right>
                                <h1>Easy Breakfast Meal</h1>
                            </Fade>
                            <Fade right>
                                <button>Read More</button>
                            </Fade>
                        </div>
                    </div>
                    <div className='carousel-item item-two'>
                        <div className="carousel-content">
                            <h1>Creamy Spicey Hatch Green</h1>
                            <h1>Easy Breakfast Meal</h1>
                            <button>Read More</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Header
