import { useState, useEffect } from "react"

export interface IProduct {
    id: number
    title: string
    description: string
    image: string
    price: number
    category: string
}

export function useProducts(){
    // для типизации useState мы после названия хука пишем угловые скибички и в них указываем тип(интерфейс например) и пустой масив
    const [products , setProducts] = useState<IProduct[]>([])
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("https://fakestoreapi.com/products")
            const productsData = await response.json()
            setProducts(productsData)
        }
        fetchProducts()
    }, [])

    return {products: products}
}
