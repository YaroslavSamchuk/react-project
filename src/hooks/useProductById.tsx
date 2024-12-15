import { useState, useEffect } from "react"
import { IProduct } from "./useProducts"

export function useProductById(id: number){
    const [product , setProduct] = useState<IProduct>()
    
    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/product/${id}`)
            const productData = await response.json()
            setProduct(productData)
        }
        fetchProduct()
    }, [id])
    return {product: product}
}