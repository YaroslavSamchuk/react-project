import { useParams } from "react-router-dom";
import { useProductById } from "../../hooks/useProductById"
import "./ProductPage.css"


export function ProductPage (){
    const params = useParams()
    // NaN почитать
    const {product} = useProductById(Number(params.id))

    return (
        <div className="product-container">
            {/* <div style={{width:419, height:474}} > */}
                <img className="product-image" src={product?.image} alt="img"/>
            {/* </div> */}
            <div className="detail-box">
                <div className="text-box">
                    <h1 className="title">{product?.title}</h1>
                    <p className="description">{product?.description}</p>
                    <p className="price-text">Price: {product?.price}</p>
                    <p className="category">Category: {product?.category}</p>
                </div>
                <div className="buttons">
                    <button className="purchase-btn">Додати до кошика</button>
                    <button className="purchase-btn">Купити</button>
                </div>
            </div>
            
            {/* <h6>{params.id}</h6>    */}
        </div>
    )
}