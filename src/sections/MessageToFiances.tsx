import styles from './MessageToFiances.module.css'

export const MessageToFiances = () => {
    return (
        <div className={styles.form}>
            <p>Mensagens aos Noivos</p>
            <form>
                <div className={styles.name}>
                    <p>Nome:</p>
                    <input type="text" />
                </div>
                <div className={styles.message}>
                    <p>Mensagem:</p>
                    <textarea />
                </div>
                <button className={styles.submitButton} type="submit">Enviar</button>
            </form>
        </div>
    )
}