import "./SearchBar.css"
import { useState, useRef, useEffect } from "react"

export function SearchBar() {
	// створюємо хук для відсліжування стану
    const [isModalOpen, setIsModalOpen] = useState(false)
	// створюємо хук для відсліжування current, коли ми focus на модалочку або нє(там де ми клікнули короче,це модалочка чи ні)
	const modalRef = useRef<HTMLDivElement| null>(null)
	// створюємо хук для відсліжування current, коли ми focus на поле вводу аб нє(там де ми клікнули короче,це інпут чи ні)
	const inputRef = useRef<HTMLInputElement| null>(null)
	// функція для відслідковування фокусу на полі вводу
    const inputOnFocus = () => {
		// умова, у якій ми перевіряємо чи відкрита модалочка при фокусі на інпуті
		// якщо так:
        if(isModalOpen) {
			// модалочка off
            setIsModalOpen(false)
		// якщо ні:
        } else {
			// модалочка on
            setIsModalOpen(true)
        }
    }
	// хук, який відпрацює при монтовці(монтеровці, ну кароче создании/отрисовке) компоненту
	useEffect(()=>{
		// функція, яка спрацює при фокусі на document вне модалочки
		function handleClickOutside(event: MouseEvent){
			// умова, яка перевіряє чи місце де ми клікнули не є модалочкою і не є інпутом
				if(event.target != modalRef.current && inputRef.current != event.target){
					// якщо це так(ми клікнули не на модалочку і не на інпут), то модалочка off 
					setIsModalOpen(false)
					
			}
		}
		// перевірка повторного фоусу, типо якщо фокусу немає, то ми додаємо його
		document.addEventListener("click", handleClickOutside )
		// просто ретурн, забула що я хотіла тут написати...
		return()=>{
			// якщо є - прибираємо
			document.removeEventListener("click", handleClickOutside)
		}


	},[])
    // теж просто ретурн, забула що я хотіла тут написати...
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
			{/* тернарна операція, яка відкриває модалочку, бо так треба(бо у нас фокус на інпуті), 
			але якщо фокусу немає, то буде null і модалочку ми не побачимо */}
            {isModalOpen ? (
                <div ref={modalRef}>Opened</div>
            ) : null}
		</div>
	);
}
