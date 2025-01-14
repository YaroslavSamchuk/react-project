import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
//создаем интерфейс , пропс 
interface IModalProps {
	//задаем в интервейсе что он будет "дочерним"
	children: ReactNode;
	//создаем переменную? состояние тру фолз для состояния модального окна
	doCloseOutside: boolean;
	onClose: () => void;
	container?: Element;
}
//
export function Modal(props: IModalProps) {
	//деструктуризируем пропс
	const {
		children,
		doCloseOutside,
		onClose,
		container = document.body,
	} = props;
//создаем хук useRef для модалки
	const modalRef = useRef<HTMLDivElement | null>(null);
	//функция закрытия окна при нажатии за модалкой
	function handleClickOutside(event: MouseEvent) {
		if (event.target != modalRef.current) {
			onClose();
		}
	}

	useEffect(() => {
		if (doCloseOutside) {
			document.addEventListener("click", handleClickOutside);
			return () => {
				document.removeEventListener("click", handleClickOutside);
			};
		}
	}, []);
	//портал позволяюший возвысить див в иерархии что бы он был поверх остальных елементов
	return createPortal(
		<div ref={modalRef} className="modal">
			{children}
		</div>,
		container
	);
}
