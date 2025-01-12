import { Modal } from "../Modal/Modal";
import "./SearchBar.css";
import { useState, useRef, useEffect } from "react";

export function SearchBar() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modalContainerRef = useRef<HTMLDivElement | null>(null);
	const inputOnFocus = () => {
		if (isModalOpen) {
			setIsModalOpen(false);
		} else {
			setIsModalOpen(true);
		}
	};
	return (
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
			{isModalOpen ? (
				<Modal
					doCloseOutside={false}
					onClose={() => {
						setIsModalOpen(false);
					}}
					container={
						modalContainerRef.current
							? modalContainerRef.current
							: undefined
					}
				>
					Opened
				</Modal>
			) : null}
		</div>
	);
}
