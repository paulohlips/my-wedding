import { Title } from '../components/Title/Title'
import styles from "./Messages.module.css"

export const Messages = () => {
    return (

        <div className={styles.messageBox}>
            <Title title="Mensagens Recebidas" />
            {
                mockedMessages.map(message => {
                    return (
                        <div >
                            <div className={styles.author}>
                                <p>{message.name}</p>
                                <p>{message.date}</p>
                            </div>
                            <p className={styles.message}>{message.message}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

const mockedMessages = [
    {
        name: "Cassia",
        date: "28/10/2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur ipsum aliquam perspiciatis ipsam ea omnis magnam provident consequatur similique voluptates quisquam veritatis voluptatem assumenda ad ducimus commodi, vitae reprehenderit eligendi."
    },
    {
        name: "Cassia",
        date: "28/10/2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur ipsum aliquam perspiciatis ipsam ea omnis magnam provident consequatur similique voluptates quisquam veritatis voluptatem assumenda ad ducimus commodi, vitae reprehenderit eligendi."
    },
    {
        name: "Cassia",
        date: "28/10/2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur ipsum aliquam perspiciatis ipsam ea omnis magnam provident consequatur similique voluptates quisquam veritatis voluptatem assumenda ad ducimus commodi, vitae reprehenderit eligendi."
    },
    {
        name: "Cassia",
        date: "28/10/2024",
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tenetur ipsum aliquam perspiciatis ipsam ea omnis magnam provident consequatur similique voluptates quisquam veritatis voluptatem assumenda ad ducimus commodi, vitae reprehenderit eligendi."
    }
]