import styles from './Fiances.module.css'
import fiancesImg from '../assets/images/fiaces.png'
import { useIsMobile } from '../hooks/useIsMobile'
import { Title } from '../components/Title/Title'

export const Fiances = () => {
    const isMobile = useIsMobile()
    return (
        <div id='NossaHistoria' className={styles.fiancesDisplay} style={{ maxWidth: isMobile ? '90%' : '100%' }}>
            <Title title='Um pouquinho da nossa linda história' styles={styles.fiancesTextTitle} />
            <img src={fiancesImg} />
            <p className={styles.fiancesText}>Brasilienses que estudaram juntos na quinta série e nunca trocaram uma palavra em sala de aula, tiverem o reencontro que deu em casamento!!!</p>
            <p className={styles.fiancesText}>Se você está aqui, conhece um pouquinho da nossa história! Nos reencontramos em uma rede social, a conversa foi boa e nunca mais nos desgrudamos! O primeiro beijo foi na frente da casa da avô da noiva, na pandemia em 2020 e assistido pela vizinha fofoqueira kkkkk. </p>
            <p className={styles.fiancesText}>Na primeira viagem descobrimos que temos um lugar preferido no mundo que não é segredo pra ninguém: João Pessoa, nossa terrinha favorita!</p>
            <p className={styles.fiancesText}>Somos apaixonados pelas praias do Nordeste, por viajar, e uma das nossas comidas favoritas é churrasco!</p>
            <p className={styles.fiancesText}>Estamos animados para a  construção da nossa família!Por isso queremos vibrar e compartilhar da nossa felicidade com vocês na nossa cerimônia. </p>
        </div>
    )
}