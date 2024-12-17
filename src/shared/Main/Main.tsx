import './Main.css'
// import { ProductsList } from '../ProductsList/ProductsList'
import { ReactNode } from 'react'

interface IMainProps{
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}