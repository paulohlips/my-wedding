import { Title } from '../../components/Title/Title'
import styles from './MessageToFiances.module.css'

export const MessageToFiances = () => {
    return (
        <div id='MensagemAosNoivos' className={styles.formContainer}>
            <Title title="Mensagem aos Noivos" styles={styles.title} />
            <form className={styles.form}>
                <div className={styles.name}>
                    <p>Nome:</p>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.message}>
                    <p className={styles.messages}>Mensagem:</p>
                    <textarea className={styles.textarea} />
                </div>
                <div className={styles.submitButtonContainer}>
                    <button className={styles.submitButton} type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}