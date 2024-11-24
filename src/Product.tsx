import { useState } from "react"

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
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <h2>Amount: {amount}</h2>
            <button onClick={removeOneProduct}>
                -
            </button>
            <button onClick={addOneProduct}>
                +
            </button>
        </div>
    )
}