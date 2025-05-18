import { ReactElement, useState } from "react"
import styles from "./PresenceConfirmation.module.css"
import { Modal } from "../components/Modal/Modal"
import { Title } from '../components/Title/Title'

export const PresenceConfirmation = () => {
    //const [inviteAccepted, sentInviteAccepted] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleInvited = (input: boolean) => {
        //sentInviteAccepted(input)
        setIsModalOpen(input)
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <div id="ConfirmarPresenca" className={styles.presenceConfirmation}>
            <Title title="Confirme sua Presença" styles={styles.giftsSectionTitle} />
            <div className={styles.radioSection}>
                <p className={styles.radioSectionTitle}>Você irá comparecer à cerimônia?</p>
                <div className={styles.radioContainer}>
                    <div className={styles.radioContainerItem}>
                        <input
                            type="radio"
                            id="choice1"
                            name="accept"
                            value="option"
                            onChange={() => handleInvited(true)}
                            onClick={() => handleInvited(true)}
                        />
                        <label>Sim</label>
                    </div>

                    <div className={styles.radioContainerItem}>
                        <input
                            type="radio"
                            id="choice1"
                            name="accept"
                            value="option"
                            onChange={() => handleInvited(true)}
                            onClick={() => handleInvited(true)}
                        />
                        <label>Não</label>
                    </div>
                </div>
//TODO: create a modal contet based on user response: true or false
                <CustomModal
                    isModalOpen={isModalOpen}
                    handleClose={handleClose}
                    children={
                        <div className={styles.confirmation}>
                            <p>Digite seu token de confirmação: </p>
                            <input type="text" />
                            <button onClick={() => handleInvited}>Confirmar</button>
                        </div>}
                />

            </div>
        </div>
    )
}

type CustomModalProps = {
    isModalOpen: boolean,
    handleClose: () => void,
    children: ReactElement
}

const CustomModal = ({ isModalOpen, handleClose, children }: CustomModalProps) => {
    return (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
            {children}
        </Modal>
    )
}