import { useState } from "react"

import "./Product.css"

interface IProductProps{
    name: string,
    price: number
}

export function Product(props: IProductProps){
    const [amount, setAmount] = useState(1)
    function addOneProduct() {
        setAmount(amount + 1)
        
    }
    function removeOneProduct() {
        if (amount > 1) {
            setAmount(amount - 1)
        } else {
            alert("You have less than one product!")
        }
    }
    return( 
        <div className="product">
            <h1 className="name">{props.name}</h1>
            <span className="amount">{amount}</span>
            <h2 className="price">{props.price}</h2>
            <button className="purchase-btn">
                купить
            </button>
        </div>
    )
}