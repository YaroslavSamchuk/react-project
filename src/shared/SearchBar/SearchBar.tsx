
import { Modal } from "../Modal/Modal";
import "./SearchBar.css";
import { useState, useRef, useEffect } from "react";

//функция нашего поисковика которая сразу экспортируется
export function SearchBar() {
  //записываем состояние модального окна , открыто ли оно
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
export function SearchBar() {
	const { products } = useProducts();

	const [isModalOpen, setIsModalOpen] = useState(false);
   //записываем в переменную div елемент , оно будет работать по принципу id что бы divы различались но не используя id 
	const modalContainerRef = useRef<HTMLDivElement | null>(null);
   // проверка на фокус инпута , или же условно кликнут ли инпут
	const inputOnFocus = () => {
		if (isModalOpen) {
			setIsModalOpen(false);
		} else {
			setIsModalOpen(true);
		}
	};
	const [value, setValue] = useState<string>("")
	return (
    // div с модалкой
		<div
			className="searchBar"
			ref={modalContainerRef}
			onClick={(event) => {
				event.stopPropagation();
			}}
		>
			<input
				type="text"
				onFocus={inputOnFocus}
				placeholder="Пошук продукта"
				onInput={(event) => {

					setValue((event.target as HTMLInputElement).value)
                    // Реализовать фильтрацию
				}}
			/>
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
      {/* сама модалка и проверка ее */}
			{isModalOpen ? (
				<Modal
					doCloseOutside={true}
					onClose={() => {
						setIsModalOpen(false);
					}}
					container={
						modalContainerRef.current
							? modalContainerRef.current
							: undefined
					}
					className="searchBarModal"
				>
					{products.map((product) => {
						return (
							<div className="item">
								<svg
									width="14"
									className="search-item-icon"
									height="14"
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
								<img src={product.image} alt=""  className="search-item-img"/>
								<Link to={"/product/" + product.id} className="search-item">
									{product.title.slice(0, 50)}...
								</Link>
							</div>
						);
					})}
				</Modal>
			) : null}
		</div>
	);
}

