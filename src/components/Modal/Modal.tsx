import { ReactNode } from "react"
import styles from "./Modal.module.css"
import { IoCloseCircleOutline } from "react-icons/io5";

type ModalPropsType = {
    children: ReactNode;
    footer: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ children, footer, isOpen, onClose }: ModalPropsType) => {
    return (
        isOpen
            ? <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <IoCloseCircleOutline
                        size={42}
                        className={styles.closeIcon}
                        color="#A84424"
                        onClick={onClose}
                    />
                    <div className={styles.scrollArea}>
                        {children}
                    </div>
                    <div>
                        {footer}
                    </div>
                </div>
            </div>
            : null
    )
}