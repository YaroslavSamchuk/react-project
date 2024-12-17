import { useState, useEffect } from "react"


import "./ProductsList.css"
import { useProducts } from "../../hooks/useProducts"
import { ProductCard } from "./ProductCard/ProductCard"

// https://fakestoreapi.com/products/categories


export function ProductsList(){
    const {products} = useProducts()  // []
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredProducts, setFilteredProducts] = useState(products) // []

    useEffect(() => {
        console.log(selectedCategory)
        if (selectedCategory === "All") {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter((product) => {
                return product.category === selectedCategory
            })
            setFilteredProducts(filtered)
        }
    }, [selectedCategory, products])

    return (
        <div className="products">
            <div className="selectDiv">
                <select className="selectMenu" onChange={(event) => {
                    const selectedValue = event.target.value
                    setSelectedCategory(selectedValue)
                }}>
                    <option value="All">All</option>
                    <option value="Cutie-pies">Cutie-pies</option>
                    <option value="Grumpy">Grumpy</option>
                    <option value="Hungry">Hungry</option>
                    <option value="Proud">Proud</option>
                </select>
            </div>
            
            <div className="productsDiv">
                {filteredProducts.map((product) => {
                    // key - специальный ключ (id), который используеться при отображении массивов
                    // этот ключ позваляет определить, какой элемент был удален добавлен и т. п.
                    return <ProductCard 
                            name={product.title}
                            img={product.image}
                            price={product.price}
                            key={product.id}
                            id={product.id} />
                })}
            </div>
        </div>
    )
}
