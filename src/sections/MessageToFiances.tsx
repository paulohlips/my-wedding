import { Title } from '../components/Title/Title'
import styles from './MessageToFiances.module.css'

export const MessageToFiances = () => {
    return (
        <div id='MensagemAosNoivos' className={styles.form}>
            <Title title="Mensagens aos Noivos" />
            <form>
                <div className={styles.name}>
                    <p>Nome:</p>
                    <input type="text" />
                </div>
                <div className={styles.message}>
                    <p>Mensagem:</p>
                    <textarea />
                </div>
                <div className={styles.submitButtonContainer}>
                    <button className={styles.submitButton} type="submit">Enviar</button>

                </div>
            </form>
        </div>
    )
}