import styles from "./DressCode.module.css"
import dresscode1 from "../assets/images/dress-code-1.png"
import dresscode2 from "../assets/images/dress-code-2.png"
import { Title } from "../components/Title/Title"
import { SlideWindow } from "../components/SlideWindow/SlideWindow"
import { useIsMobile } from "../hooks/useIsMobile"

export const DressCode = () => {
    const isMobile = useIsMobile()
    return (
        <div className={styles.dressCode}>
            <Title title="Dress Code: Esporte Fino" />
            {isMobile ? <SlideWindow data={mobileInput} /> : <DesktopDressCode />}
            <div className={styles.dressCodeTips}>
                <p>Dica: Usem sapatos confortáveis e sugerimos que não seja salto fino, o local é gramado.</p>
            </div>
        </div>
    )
}

const mobileInput = [
    {
        id: 1,
        description: '',
        src: dresscode1
    },
    {
        id: 2,
        description: '',
        src: dresscode1
    }]

const DesktopDressCode = () => {
    return (
        < div className={styles.images} >
            <img src={dresscode1} />
            <img src={dresscode2} />
        </div >
    )
}