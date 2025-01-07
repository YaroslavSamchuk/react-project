import "./SearchBar.css"
import { useState, useRef, useEffect } from "react"

export function SearchBar() {
    const [isModalOpen, setIsModalOpen] = useState(false)
	const modalRef = useRef<HTMLDivElement| null>(null)
	const inputRef = useRef<HTMLInputElement| null>(null)
    const inputOnFocus = () => {
        if(isModalOpen) {
            setIsModalOpen(false)
        } else {
            setIsModalOpen(true)
        }
    }
	
	useEffect(()=>{
		function handleClickOutside(event: MouseEvent){
				if(event.target != modalRef.current && inputRef.current != event.target){
					setIsModalOpen(false)
					
			}
		}
		document.addEventListener("click", handleClickOutside )
		return()=>{
			document.removeEventListener("click", handleClickOutside)
		}


	},[])
    
	return (
		<div className="searchBar">
			<input type="text" onFocus={inputOnFocus} ref={inputRef} placeholder="Пошук продукта" />
			<svg
				width="28"
                className="search-icon"
				height="28"
				viewBox="0 0 28 28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M26 26L20.2 20.2M23.3333 12.6667C23.3333 18.5577 18.5577 23.3333 12.6667 23.3333C6.77563 23.3333 2 18.5577 2 12.6667C2 6.77563 6.77563 2 12.6667 2C18.5577 2 23.3333 6.77563 23.3333 12.6667Z"
					stroke="#1E1E1E"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
            {isModalOpen ? (
                <div ref={modalRef}>Opened</div>
            ) : null}
		</div>
	);
}
