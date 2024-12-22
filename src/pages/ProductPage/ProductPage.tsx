import { useParams } from "react-router-dom";
import { useProductById } from "../../hooks/useProductById"
import "./ProductPage.css"


export function ProductPage (){
    const params = useParams()
    // NaN почитать
    const {product} = useProductById(Number(params.id))

    return (
        <div className="productContainer">
            {/* <div style={{width:419, height:474}} > */}
                <img className="productImage" src={product?.image} alt="img"/>
            {/* </div> */}
            <div className="detailBox">
                <div className="textBox">
                    <h1 className="title">{product?.title}</h1>
                    <p className="description">{product?.description}</p>
                    <p className="priceText">Price: {product?.price}</p>
                    <p className="category">Category: {product?.category}</p>
                </div>
                <div className="buttons">
                    <button className="btn">Додати до кошика</button>
                    <button className="btn">Купити</button>
                </div>
            </div>
            
            {/* <h6>{params.id}</h6>    */}
        </div>
    )
}