import { useParams } from "react-router-dom";


export function ProductPage (){
    const params = useParams()
    return (
        <div className="product">
            <h1>Product:</h1>
            <p>Description:</p>
            <img src="" alt="img" />
            <p>Price:</p>
            <p>Category:</p>
            <h6>{params.id}</h6>   
        </div>
        
    )
}