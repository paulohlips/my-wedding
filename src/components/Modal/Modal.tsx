import { ReactNode } from "react"
import styles from "./Modal.module.css"
import { IoCloseCircleOutline } from "react-icons/io5";

type ModalPropsType = {
    children: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = ({ children, footer, header, isOpen, onClose }: ModalPropsType) => {
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
                    {header ? <div className={styles.header}>
                        {header}
                    </div> : null}
                    <div className={styles.scrollArea}>
                        {children}
                    </div>
                    {footer ? <div className={styles.footer}>
                        {footer}
                    </div> : null}
                </div>
            </div>
            : null
    )
}