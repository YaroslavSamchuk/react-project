import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
	children: ReactNode;
	doCloseOutside: boolean;
	onClose: () => void;
	container?: Element;
}

export function Modal(props: IModalProps) {
	const {
		children,
		doCloseOutside,
		onClose,
		container = document.body,
	} = props;

	const modalRef = useRef<HTMLDivElement | null>(null);

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
	return createPortal(
		<div ref={modalRef} className="modal">
			{children}
		</div>,
		container
	);
}
