import { Layout } from "./Layout"
import { Main } from "./Main"
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
    return (
        <Layout>
            <Main/>
        </Layout>
    )
}