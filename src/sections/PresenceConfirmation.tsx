import { useState } from "react"
import styles from "./PresenceConfirmation.module.css"

export const PresenceConfirmation = () => {
    const [inviteAccepted, sentInviteAccepted] = useState<boolean>(false)

    const handleInvited = (input: boolean) => {
        sentInviteAccepted(input)
    }

    return (
        <div className={styles.presenceConfirmation}>
            <p>Confirme sua Presença</p>
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

                {inviteAccepted
                    ? <div className={styles.confirmation}>
                        <p>Digite seu token de confirmação: </p>
                        <input type="text" />
                        <button>Confirmar</button>
                    </div>
                    : null}
            </div>
        </div>
    )
}