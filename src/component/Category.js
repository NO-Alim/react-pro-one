import React from 'react'
import { useGlobalContext } from '../context'
import './Scss/Category.scss'

const Category = () => {
    const {product,loading} = useGlobalContext();
    const getUniqList = (arr,key) => {
        return[...new Map(arr.map(item => [item[key],item])).values()];
    }

    const AllCategory = getUniqList(product, 'category');
    if(loading){
        return(
            <h1>Loading</h1>
        )
    }
    return (
        <div className="category-container">
            <div className="categories">
                {AllCategory.map((item,ind) =>{
                    return(
                        <article key={ind}>
                            <div className="img-container">
                                <img src={item.image} alt="" />
                            </div>
                            <h4>{item.category}</h4>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Category
