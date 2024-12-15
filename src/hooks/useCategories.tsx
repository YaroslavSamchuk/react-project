import { useState, useEffect } from "react"


export function useCategories(){
    const [categories, setCategories] = useState<string[]>([])
    useEffect(() => {
        async function fetchCategories(){
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const categoriesData = await response.json()
            setCategories(categoriesData)
        }
        fetchCategories()
    }, [])
    return {categories: categories}
}
