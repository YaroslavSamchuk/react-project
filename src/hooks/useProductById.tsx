import { useState, useEffect } from "react"
import { IProduct } from "./useProducts"

export function useProductById(id: number | undefined){

    const [product , setProduct] = useState<IProduct>()

    useEffect(() => {
        if(!id){
            return
        }

        async function fetchProduct() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const productData = await response.json()
            setProduct(productData)
        }
        fetchProduct()
    }, [id])
    return {product: product}
}