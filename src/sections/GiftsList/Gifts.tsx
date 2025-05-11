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

export const Gifts = () => {
    const [giftsList, setGiftsList] = useState(giftMocks);
    const isMobile = useIsMobile();
    return (
        <div id="Presentes" className={styles.giftsSection}>
            <Title title="Presentes aos noivos" styles={styles.giftsSectionTitle} />
            <h3>
                Fique à vontade para escolher entre uma das três opções de presente
            </h3>
            <div className={styles.disclaimer}>
                <p>*As imagens são meramente ilustrativas</p>
            </div>
            <div className={styles.giftsSectionButtons}>
                <button onClick={() => setGiftsList(giftMocks)}>Virtuais</button>
                <button onClick={() => setGiftsList(mockedHoneyMoon)}>
                    Loja Física
                </button>
                <button onClick={() => setGiftsList(mockedPhysicalStores)}>
                    Lua de Mel
                </button>
            </div>
            <div style={{ paddingTop: "2rem" }}>
                {isMobile ? (
                    <SlideWindow data={giftsList} showButton={true} />
                ) : (
                    <GiftsListDesktop gifts={giftsList} />
                )}
            </div>
        </div>
    );
};

const GiftsListDesktop = ({ gifts }: GiftsListProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart, addToCart, clearCart, getTotalCartPriceInCents } = useCart();

    const handleBuy = (gift: Gift) => {
        addToCart({ ...gift, quantity: 1 });
        setIsOpen(true);
        console.log(cart);
    };

    const handleClearCart = () => {
        clearCart();
        setIsOpen(false);
    };

    return (
        <div className={styles.gridContainer}>
            {gifts.map((gift) => {
                return (
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
                                <button
                                    onClick={() => handleBuy(gift)}
                                    className={styles.buyGiftButton}
                                >
                                    Comprar
                                </button>
                                <Modal
                                    isOpen={isOpen && !!cart.length}
                                    onClose={() => setIsOpen(false)}
                                    children={
                                        <div>
                                            <a
                                                className={styles.giftRemoveItem}
                                                onClick={() => handleClearCart()}
                                            >
                                                Remover Tudo
                                            </a>
                                            <Cart />
                                        </div>
                                    }
                                    footer={
                                        <div className={styles.checkoutButtonContainer}>
                                            <p className={styles.cartPriceText}>
                                                Valor total: R${" "}
                                                {(getTotalCartPriceInCents() / 100).toFixed(2)}
                                            </p>
                                            <button className={styles.checkoutButton}>
                                                Finalizar Compra
                                            </button>
                                        </div>
                                    }
                                />
                            </div>
                        }
                    />
                );
            })}
        </div>
    );
};

const giftMocks: Gift[] = [
    {
        id: "gift-0011",
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Máquina de Lavar",
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
