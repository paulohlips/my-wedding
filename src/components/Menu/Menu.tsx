
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useIsMobile } from '../../hooks/useIsMobile'
import styles from './Menu.module.css'
import { Cart } from "../Cart/Cart";
import { Modal } from "../Modal/Modal";
import { useCart } from "../../context/CartContext";
import { SetPaymentTile } from "../../sections/GiftsList/Gifts";
import { Pix } from "../../sections/Payments/Pix";
import { CreditCard } from "../../sections/Payments/CreditCard";

export const Menu = () => {
    const isMobile = useIsMobile()
    return <div className={styles.menu}>{isMobile ? <MobileMenu /> : <DesktopMenu />}</div>
};

const DesktopMenu = () => {
    const [openCart, setOpenCart] = useState(false)
    const [isOpenToPay, setIsOpenToPay] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('pix')

    const handlePay = () => {
        setIsOpenToPay(true)
        setOpenCart(false)
    }


    const { getCartItemQuantity, getTotalCartPriceInCents } = useCart();
    const cartItemsQuantity = getCartItemQuantity()

    const handleOpenCart = () => {
        if (cartItemsQuantity) {
            setOpenCart(true)
        }
    }

    const handleCloseCart = () => {
        setOpenCart(false)
    }

    return (
        <div className={styles.menuItems}>
            <div className={styles.internalContainer}>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#NossaHistoria")}>
                    <span className={styles.sectionLink}>Nossa História</span>
                </div>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#Padrinhos")}>
                    <span className={styles.sectionLink}>Padrinhos</span>
                </div>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#MensagemAosNoivos")}>
                    <span className={styles.sectionLink}>Mensagens aos noivos</span>
                </div>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#Presentes")}>
                    <span className={styles.sectionLink}>Presentes</span>
                </div>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#ConfirmarPresenca")}>
                    <span className={styles.sectionLink}>Confirmar Presença</span>
                </div>
                <div className={styles.menuOption} onClick={() => (window.location.hash = "#Localizacao")}>
                    <span className={styles.sectionLink}>Localização</span>
                </div>
                <div className={styles.menuOption} onClick={() => handleOpenCart()}>
                    <span className={styles.sectionLink}>Carrinho</span>
                </div>
            </div>
            <Modal children={<Cart />} isOpen={openCart && !!cartItemsQuantity} onClose={handleCloseCart}
                footer={
                    <div className={styles.checkoutButtonContainer}>
                        <p className={styles.cartPriceText}>
                            Valor total: R${(getTotalCartPriceInCents() / 100).toFixed(2)}
                        </p>
                        <button className={styles.checkoutButton} onClick={handlePay}>Finalizar Compra</button>
                    </div>
                }
            />

            <Modal
                isOpen={isOpenToPay}
                onClose={() => setIsOpenToPay(false)}
                header={<SetPaymentTile paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />}
                children={
                    <div>
                        {paymentMethod === 'pix' ? <Pix /> : <CreditCard />}
                    </div>
                }
            />
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
                            <GiHamburgerMenu size={36} color='#A84424' onClick={handleIsClicked} />
                        </div>

                    </div>
                    :
                    <div className={styles.modal} onClick={handleIsClicked}>
                        <nav className={styles.mobileMenuNavOpened} onClick={handleIsClicked}>
                            <a className={styles.sectionLink} href="#NossaHistoria">Nossa História</a>
                            <a className={styles.sectionLink} href="#Padrinhos">Padrinhos</a>
                            <a className={styles.sectionLink} href="#MensagemAosNoivos">Mensagens aos noivos</a>
                            <a className={styles.sectionLink} href="#Presentes">Presentes</a>
                            <a className={styles.sectionLink} href="#ConfirmarPresenca">Confirmar Presença</a>
                            <a className={styles.sectionLink} href="#Localizacao">Localização</a>
                        </nav>
                    </div>
            }
        </div >
    )
}


