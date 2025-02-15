
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
                <a className={styles.sectionLink} href="#NossaHistoria">Nossa História</a>
                <a className={styles.sectionLink} href="#Padrinhos">Padrinhos</a>
                <a className={styles.sectionLink} href="#MensagemAosNoivos">Mensagens aos noivos</a>
                <a className={styles.sectionLink} href="#Presentes">Presentes</a>
                <a className={styles.sectionLink} href="#ConfirmarPresenca">Confirmar Presença</a>
                <a className={styles.sectionLink} href="#Localizacao">Localização</a>
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
                            <a className={styles.sectionLink} href="#">nício</a>
                            <a className={styles.sectionLink} href="#">ossa História</a>
                            <a className={styles.sectionLink} href="#">adrinhos</a>
                            <a className={styles.sectionLink} href="#">ensagens aos noivos</a>
                            <a className={styles.sectionLink} href="#">resentes</a>
                            <a className={styles.sectionLink} href="#">onfirmar Presença</a>
                        </nav>
                    </div>
            }
        </div >
    )
}


