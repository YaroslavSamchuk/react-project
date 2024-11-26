import { Product } from "./Product"
import "./ProductsList.css"

export function ProductsList(){
    const products = [
        {
            name: "product1",
            price: 15,
            id: 0
        },
        {
            name: "product2",
            price: 20,
            id: 1
        },
        {
            name: "product3",
            price: 25,
            id: 2
        },
        {
            name: "product4",
            price: 30,
            id: 3
        },
    ]
    return (
        <div className="products">
            {products.map((product) => {
                // key - специальный ключ (id), который используеться при отображении массивов
                // этот ключ позваляет определить, какой элемент был удален добавлен и т. п.
                return <Product 
                        name={product.name}
                        price={product.price}
                        key={product.id} />
            })}
        </div>
    )
}
