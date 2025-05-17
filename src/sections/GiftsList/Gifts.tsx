import { useState } from "react";
import { Card } from "../../components/Card/Card";
import styles from "./Gifts.module.css";
import { Title } from "../../components/Title/Title";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SlideWindow } from "../../components/SlideWindow/SlideWindow";
import { Modal } from "../../components/Modal/Modal";
import { Cart } from "../../components/Cart/Cart";
import { Gift, GiftsListProps } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";
import { CreditCard } from "../Payments/CreditCard";
import { FaCreditCard } from 'react-icons/fa';
import pixLogo from '../../assets/images/pix.png'
import { Pix } from "../Payments/Pix";

export const Gifts = () => {
    const [giftsList, setGiftsList] = useState(giftMocks);
    const [isOpenCart, setIsOpenCart] = useState(false);
    const [isOpenToPay, setIsOpenToPay] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('pix')
    const isMobile = useIsMobile();
    const { cart, addToCart, clearCart, getTotalCartPriceInCents } = useCart();

    const handleBuy = (gift: Gift) => {
        addToCart({ ...gift, quantity: 1 });
        setIsOpenCart(true);
    };

    const handleClearCart = () => {
        clearCart();
        setIsOpenCart(false);
    };

    const handlePay = () => {
        setIsOpenToPay(true)
        setIsOpenCart(false)
    }

    return (
        <div id="Presentes" className={styles.giftsSection}>
            <Title title="Presentes aos noivos" styles={styles.giftsSectionTitle} />
            <h3>Fique à vontade para escolher entre uma das três opções de presente</h3>
            <div className={styles.disclaimer}>
                <p>*As imagens são meramente ilustrativas</p>
            </div>
            <div className={styles.giftsSectionButtons}>
                <button onClick={() => setGiftsList(giftMocks)}>Virtuais</button>
                <button onClick={() => setGiftsList(mockedHoneyMoon)}>Loja Física</button>
                <button onClick={() => setGiftsList(mockedPhysicalStores)}>Lua de Mel</button>
            </div>
            <div style={{ paddingTop: "2rem" }}>
                {isMobile ? (
                    <SlideWindow data={giftsList} showButton={true} onBuy={handleBuy} />
                ) : (
                    <GiftsListDesktop gifts={giftsList} onBuy={handleBuy} />
                )}
            </div>

            <Modal
                isOpen={isOpenCart && !!cart.length}
                onClose={() => setIsOpenCart(false)}
                children={
                    <div>
                        <a className={styles.giftRemoveItem} onClick={handleClearCart}>
                            Remover Tudo
                        </a>
                        <Cart />
                    </div>
                }
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
    );
};

const SetPaymentTile = ({ paymentMethod, setPaymentMethod }: { paymentMethod: string, setPaymentMethod: (paymentMethod: string) => void }) => {
    return (
        <div className={styles.paymentTypeContainer}>
            <div className={styles.paymentTile}>
                <p className={styles.tileTitle}>Escolha a forma de pagamento</p>
            </div>
            <div className={styles.paymentMethods}>
                <div className={styles.paymentType} onClick={() => setPaymentMethod('pix')}>
                    <input type="radio" checked={paymentMethod === 'pix'} />
                    <img src={pixLogo} width={32} height={32} />
                    <p className={styles.methodName}>Pix à vista</p>
                </div>
                <div className={styles.paymentType} onClick={() => setPaymentMethod('card')}>
                    <input type="radio" checked={paymentMethod === 'card'} />

                    <span className={styles.icons}>
                        <FaCreditCard />
                    </span>
                    <p className={styles.methodName}>Cartão de crédito</p>
                </div>
            </div>
        </div>
    )
}


const GiftsListDesktop = ({ gifts, onBuy }: GiftsListProps & { onBuy: (gift: Gift) => void }) => {
    return (
        <div className={styles.gridContainer}>
            {gifts.map((gift) => (
                <Card
                    key={gift.id}
                    imageStyles={{
                        width: "320px",
                        height: "210px",
                        objectFit: "cover",
                    }}
                    image={gift.src}
                    children={
                        <div className={styles.gift}>
                            <p className={styles.giftDescription}>{gift.description}</p>
                            <p className={styles.giftPrice}>{gift.price}</p>
                            <button onClick={() => onBuy(gift)} className={styles.buyGiftButton}>
                                Comprar
                            </button>
                        </div>
                    }
                />
            ))}
        </div>
    );
};


const giftMocks: Gift[] = [
    {
        id: "gift-0011",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Máquina de Lavar Com um nome um pouco mais longo",
        price: "$190.99",
        priceInCents: 19990,
        quantity: 10,
    },
    {
        id: "gift-0021",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Geladeira",
        price: "$290.99",
        priceInCents: 29990,
        quantity: 5,
    },
    {
        id: "gift-0031",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "TV Smart",
        price: "$1400.50",
        priceInCents: 14500,
        quantity: 25,
    },
    {
        id: "gift-0041",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Jogo de Panelas",
        price: "$120.00",
        priceInCents: 12000,
        quantity: 40,
    },
    {
        id: "gift-0051",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Sofá",
        price: "$220.75",
        priceInCents: 22750,
        quantity: 15,
    },
];

const mockedHoneyMoon = [
    {
        id: "gift-0013",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Máquina de Lavar",
        price: "$19.99",
        priceInCents: 1999,
        quantity: 10,
    },
    {
        id: "gift-0023",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Geladeira",
        price: "$29.99",
        priceInCents: 2999,
        quantity: 5,
    },
    {
        id: "gift-0033",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Air Frayer",
        price: "$14.50",
        priceInCents: 1450,
        quantity: 25,
    },
    {
        id: "gift-0043",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Jogo de Panelas",
        price: "$12.00",
        priceInCents: 1200,
        quantity: 40,
    },
    {
        id: "gift-0053",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Sofá",
        price: "$22.75",
        priceInCents: 2275,
        quantity: 15,
    },
];

const mockedPhysicalStores = [
    {
        id: "gift-001",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Máquina de Lavar",
        price: "$19.99",
        priceInCents: 1999,
        quantity: 10,
    },
    {
        id: "gift-002",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Geladeira",
        price: "$29.99",
        priceInCents: 2999,
        quantity: 5,
    },
    {
        id: "gift-003",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Air Frayer",
        price: "$14.50",
        priceInCents: 1450,
        quantity: 25,
    },
    {
        id: "gift-004",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Jogo de Panelas",
        price: "$12.00",
        priceInCents: 1200,
        quantity: 40,
    },
    {
        id: "gift-005",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Sofá",
        price: "$22.75",
        priceInCents: 2275,
        quantity: 15,
    },
];
