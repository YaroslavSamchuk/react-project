import { ReactNode } from "react"
import "./Layout.css"
interface ILayoutProps {
    // children специальное свойство React компонента указывается в props позволяет добавить другие элементы 
    // между открывающим и закрывающим тегом самого компонента 
    children : ReactNode
}


export function Layout(props:ILayoutProps){
    // const styles = {
    //     backgroundColor: '',
    //     color: "",
        
    // }
    return(
        <div className="Layout">
        {/* <div className="Layout" style={{backgroundColor: "gray"}}> */}
        {/* <div className="Layout" style={styles}> */}
            {props.children}
        </div>

    )   
}