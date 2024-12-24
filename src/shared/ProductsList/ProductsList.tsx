import { useState, useEffect } from "react"


import "./ProductsList.css"
import { useProducts } from "../../hooks/useProducts"
import { ProductCard } from "./ProductCard/ProductCard"
import { TailSpin } from "react-loader-spinner"

// https://fakestoreapi.com/products/categories


export function ProductsList(){
    //    {products, loading }   = {products: [], loading: boolean}
    const {products, loading, error} = useProducts()
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

    // condition ? result if true : result else
    // name == "Nikita" ? <div>Nikita tuta</div> : <div>Ne Nikita</div
    // age >= 18 ? <div>You r over 18</div> : <div> You r not over 18</div>
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
            
            {loading === true ? <div>
                <TailSpin
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                        /></div> : 
        
            error !== "" ? <div>
                {error} 
            </div> :
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
            </div>}
        </div>
    )
}
