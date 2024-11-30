import { useState } from "react"

import "./Product.css"

interface IProductProps{
    name: string,
    price: number,
    img: string
}

export function Product(props: IProductProps){
    return( 
        <div className="product">
            <h1 className="name">{props.name}</h1>
            <div className="product-image">
                <img src={props.img} alt="" />
            </div>
            <h2 className="price">{props.price}</h2>
            <button className="purchase-btn">
                купить
            </button>
        </div>
    )
}