import { Menu } from "../Menu/Menu"
import styles from './Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Menu />
            <Banner />
            <WelcomeTile />
        </div>
    )
}

const WelcomeTile = () => {
    return (
        <div className={styles.welcomeTile}>
            <p>Seja bem-vindo ao nosso site</p>
        </div>
    )
}

const Banner = () => {
    return (
        <div className={styles.bannerContainer}>
            <img src="../../../src/assets/images/monogram.png" />
        </div>
    )
}

