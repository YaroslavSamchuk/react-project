import "./SearchBar.css"
import { useState, useRef, useEffect } from "react"
//функция нашего поисковика которая сразу экспортируется
export function SearchBar() {
  //записываем состояние модального окна , открыто ли оно
    const [isModalOpen, setIsModalOpen] = useState(false)
  //записываем в переменную div елемент , оно будет работать по принципу id что бы divы различались но не используя id 
  const modalRef = useRef<HTMLDivElement| null>(null)
  // то же самое для инпутов
  const inputRef = useRef<HTMLInputElement| null>(null)
  // проверка на фокус инпута , или же условно кликнут ли инпут
    const inputOnFocus = () => {
    // если открыт то закрыть
        if(isModalOpen) {
            setIsModalOpen(false)
      // если закрыт то отображать
        } else {
            setIsModalOpen(true)
        }
    }
  // Используем хук useEffect для отслеживания кликов вне модального окна// Функция для обработки кликов вне модального окна
  useEffect(()=>{
    // Функция для обработки кликов вне модального окна
    function handleClickOutside(event: MouseEvent){
      //Если клик был не на модальном окне и не на инпуте то закрыть 
        if(event.target != modalRef.current && inputRef.current != event.target){
          setIsModalOpen(false)
          
      }
    }
    //Добавляем обработчик события клика
    document.addEventListener("click", handleClickOutside )
    //Очищаем обработчик события при размонтировании компонента
    return()=>{
      document.removeEventListener("click", handleClickOutside)
    }
  },[])

  return (
    //
    <div className="searchBar">
      {/*  Поле ввода с обработчиком фокуса*/}
      <input type="text" onFocus={inputOnFocus} ref={inputRef} placeholder="Пошук продукта" />
      {/* иконка */}
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
      {/* Модальное окно, которое открывается при фокусе на инпуте */}
            {isModalOpen ? (
                <div ref={modalRef}>Opened</div>
            ) : null}
    </div>
  );
}