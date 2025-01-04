import styles from "./PresenceConfirmation.module.css"

export const PresenceConfirmation = () => {
    return (
        <div className={styles.presenceConfirmation}>
            <p>Confirme sua Presença</p>
            <div className={styles.radioSection}>
                <p className={styles.radioSectionTitle}>Você irá comparecer à cerimônia?</p>
                <div className={styles.radioContainer}>
                    <div className={styles.radioContainerItem}>
                        <input type="radio" id="contactChoice1" name="contact" value="email" size={28} />
                        <label>Sim</label>
                    </div>

                    <div className={styles.radioContainerItem}>
                        <input type="radio" id="contactChoice2" name="contact" value="phone" />
                        <label>Não</label>
                    </div>
                </div>

                {/* TODO: just render token input field if invited person confirms presence */}
                <p>Digite seu token de confirmação: </p>
                <input type="text" />

                <button>Confirmar</button>
            </div>
        </div>
    )
}