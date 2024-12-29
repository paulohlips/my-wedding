
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useIsMobile } from '../../hooks/useIsMobile'
import styles from './Menu.module.css'
import icon from '../../assets/images/logo-16.ico'

export const Menu = () => {
    const isMobile = useIsMobile()
    return <div className={styles.menu}>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>
};

const DesktopMenu = () => {
    return (
        <div className={styles.desktopMenuContainer}>
            <nav className={styles.desktopMenu}>
                <a className={styles.sectionLink} href="#"> Início</a>
                <a className={styles.sectionLink} href="#"> Nossa História</a>
                <a className={styles.sectionLink} href="#"> Sobre os Padrinhos</a>
                <a className={styles.sectionLink} href="#"> Mensagens aos noivos</a>
                <a className={styles.sectionLink} href="#"> Presentes</a>
                <a className={styles.sectionLink} href="#"> Confirmar Presença</a>
            </nav>
        </div>
    )
}

const MobileMenu = () => {
    const [isClicked, setIsClicked] = useState(false)

    const handleIsClicked = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className={styles.mobileMenu}>
            {
                !isClicked
                    ? <div className={styles.mobileMenuNavClosed}>
                        <div className={styles.hamburgerIconContainer}>
                            <GiHamburgerMenu size={28} color='' onClick={handleIsClicked} />
                        </div>
                        <img src={icon} />
                    </div>
                    :
                    <div className={styles.modal} onClick={handleIsClicked}>
                        <nav className={styles.mobileMenuNavOpened} onClick={handleIsClicked}>
                            <a className={styles.sectionLink} href="#"> Início</a>
                            <a className={styles.sectionLink} href="#"> Nossa História</a>
                            <a className={styles.sectionLink} href="#"> Sobre os Padrinhos</a>
                            <a className={styles.sectionLink} href="#"> Mensagens aos noivos</a>
                            <a className={styles.sectionLink} href="#"> Presentes</a>
                            <a className={styles.sectionLink} href="#"> Confirmar Presença</a>
                        </nav>
                    </div>
            }
        </div >
    )
}


