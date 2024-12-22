import { useParams } from "react-router-dom"
import { useProductById } from "../../hooks/useProductById"
import "./ProductPage.css"

export function ProductPage() {
    const params = useParams()
    const { product } = useProductById(Number(params.id))

    return (
        <div className="product-container">
            <div className="product-content">
                <img src={product?.image} alt="Product" className="product-image" />
                <div className="product-info">
                    <h1 className="product-title">{product?.title}</h1>
                    <p className="product-description">{product?.description}</p>
                    <p className="product-price">Price: ${product?.price}</p>
                    <p className="product-category">Category: {product?.category}</p>
                </div>
            </div>
            <div className="product-buttons">
                <button className="product-button">В корзину</button>
                <button className="product-button">Купить</button>
            </div>
        </div>
    )
}
