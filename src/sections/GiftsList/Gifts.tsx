import { useState } from 'react';
import { Card } from '../../components/Card/Card';
import styles from './Gifts.module.css'

export const Gifts = () => {
    const [giftsList, setGiftsList] = useState(mockedGiftsList)
    return (
        <div className={styles.giftsSection}>
            <h1>Presentes aos noivos</h1>
            <h2>Fique à vontade para escolher entre uma das três opções de presente</h2>
            <div className={styles.giftsSectionButtons}>
                <button onClick={() => setGiftsList(mockedGiftsList)}>Presentes Virtuais</button>
                <button onClick={() => setGiftsList(mockedHoneyMoon)}>Presentes em Loja Física</button>
                <button onClick={() => setGiftsList(mockedPhysicalStores)}>Cotas de Lua de Mel</button>
            </div>

            <div className={styles.disclaimer}>
                <p>*As imagens são meramente ilustrativas</p>
            </div>
            <div className={styles.gridContainer}>
                {
                    giftsList.map(card => {
                        return (
                            <Card
                                key={card.id}
                                imageStyles={{
                                    width: '320px',
                                    height: '210px',
                                    objectFit: 'cover',
                                }}
                                image={card.src}
                                children={
                                    <div className={styles.gift}>
                                        <p className={styles.giftDescription}>{card.description}</p>
                                        <p className={styles.giftPrice}>{card.price}</p>
                                    </div>
                                }
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

const mockedGiftsList = [
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    }
];

const mockedHoneyMoon = [
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    }
];

const mockedPhysicalStores = [
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: "R$ 235,90"
    }
];

