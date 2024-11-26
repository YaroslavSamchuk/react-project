import './Main.css'
import { ReactNode } from "react"
import { ProductsList } from './ProductsList'
export function Main() {
    return (
        <div className='container'>
                <ProductsList/>
        </div>
    )
}