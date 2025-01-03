import styles from './MessageToFiancess.module.css'

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
                    <input type="text" />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}