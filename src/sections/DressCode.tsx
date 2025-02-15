import styles from "./DressCode.module.css"
import dresscode1 from "../assets/images/dress-code-1.png"
import dresscode2 from "../assets/images/dress-code-2.png"
import { Title } from "../components/Title/Title"

export const DressCode = () => {
    return (
        <div className={styles.dressCode}>
            <Title title="Dress Code: Esporte Fino" />
            <div className={styles.images}>
                <img src={dresscode1} />
                <img src={dresscode2} />
            </div>
            <h2>Dica: Usem sapatos confortáveis e sugerimos que não seja salto fino, o local é gramado.</h2>
        </div>
    )
}