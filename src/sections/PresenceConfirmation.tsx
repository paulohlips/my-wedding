import { useState } from "react"
import styles from "./PresenceConfirmation.module.css"
import { Modal } from "../components/Modal/Modal"
import { Title } from '../components/Title/Title'

export const PresenceConfirmation = () => {
    const [inviteAccepted, sentInviteAccepted] = useState<boolean>(false)
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const handleInvited = (input: boolean) => {
        sentInviteAccepted(input)
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
                            id="contactChoice1"
                            name="invite" value="option"
                            size={28}
                            onChange={() => handleInvited(true)}
                            onClick={() => handleInvited(true)}
                        />
                        <label>Sim</label>
                    </div>

                    <div className={styles.radioContainerItem}>
                        <input type="radio"
                            id="contactChoice2"
                            name="invite"
                            value="option"
                            onChange={() => handleInvited(false)}
                        />
                        <label>Não</label>
                    </div>
                </div>

                <Modal isOpen={isModalOpen} onClose={handleClose}>
                    <div className={styles.confirmation}>
                        <p>Digite seu token de confirmação: </p>
                        <input type="text" />
                        <button onClick={() => handleInvited}>Confirmar</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}