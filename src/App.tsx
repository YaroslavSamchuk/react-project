import { ProductsList } from "./ProductsList"
import { useState } from "react"

//  useState -> [state, setState]
// [name, setName] = [state, setState]
// name = 10 - неправильно
// setName(10) - правильно

// useState -> [state, setState]
// state - состояние, 10, "", {}, []. 
// setState - функция, которая изменяет состояние


export function AppComponent(){
    const product = "product2"
    // const [count, setCount] = useState(0) // useState принимает инициальное значение
    

    return (
        <div>
            Hello worlda
            <h1>Hello woda</h1>
            <h1>{product}</h1>
            
            <ProductsList />
        </div>
    )
}