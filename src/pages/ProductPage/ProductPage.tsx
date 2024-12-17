import { useParams } from "react-router-dom";
import { useProductById } from "../../hooks/useProductById"

export function ProductPage (){
    const params = useParams()
    // NaN почитать
    const {product} = useProductById(Number(params.id))

    return (
        <div className="product">
            <h1>Product: {product?.title}</h1>
            <p>Description:{product?.description}</p>
            <img src={product?.image} alt="img" />
            <p>Price: {product?.price}</p>
            <p>Category: {product?.category}</p>
            {/* <h6>{params.id}</h6>    */}
        </div>
    )
}