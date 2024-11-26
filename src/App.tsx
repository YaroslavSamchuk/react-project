import { Layout } from "./Layout"
import { Main } from "./Main"
import { ProductsList } from "./ProductsList"
import { useState } from "react"
import { Footer } from './Footer'
import { Header } from "./Header"

//  useState -> [state, setState]
// [name, setName] = [state, setState]
// name = 10 - неправильно
// setName(10) - правильно

// useState -> [state, setState]
// state - состояние, 10, "", {}, []. 
// setState - функция, которая изменяет состояние


export function AppComponent(){
    // const [count, setCount] = useState(0) // useState принимает инициальное значение
    

    return (
        <div>
            <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout>
        </div>
    )
}