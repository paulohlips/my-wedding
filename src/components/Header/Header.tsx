import { CountDown } from "../CountDown/CountDown"
import styles from './Header.module.css'
import monogram from '../../assets/images/monogram.png'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Banner />
            <div className={styles.bannerAndCountdown}>
                <CountDown />
            </div>
            <WelcomeTile />
        </div>
    )
}

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src={monogram} />
        </div>
    )
}

const WelcomeTile = () => {
    return (
        <div className={styles.welcomeTile}>
            <p>Seja bem-vindo ao nosso site!</p>
        </div>
    )
}


