import { CgChevronLeft } from "react-icons/cg";
import { Card } from "../components/Card/Card";
import styles from './Godparents.module.css'
import { BiChevronRight } from "react-icons/bi";
import { useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile"
import { Title } from "../components/Title/Title";

export const Godparents = () => {
    const isMobile = useIsMobile()
    const slideWindowContainer = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: string) => {
        const scrollAmount = 555
        console.log({
            current: slideWindowContainer.current,
            direction
        })
        if (slideWindowContainer.current) {
            if (direction === 'right') {
                slideWindowContainer.current.scrollLeft += scrollAmount
            }

            if (direction === 'left') {
                slideWindowContainer.current.scrollLeft -= scrollAmount

            }
        }
    }

    return (
        <div id='Padrinhos' className={styles.godParents}>
            <Title title="Sobre os Padrinhos" styles={styles.godParentsTitle} />
            <div className={styles.slides}>
                <CgChevronLeft size={48} onClick={() => handleScroll('left')} />
                <div className={styles.slidingWindow} ref={slideWindowContainer}>
                    {
                        mockedData.map(card => {
                            return (
                                <Card
                                    key={card.id}
                                    imageStyles={{
                                        maxHeight: isMobile ? '40vh' : '70vh',
                                        minWidth: isMobile ? '100%' : '5vw',
                                        padding: '1rem'
                                    }}
                                    image={card.src}
                                    children={
                                        <p className={styles.cardDescription}>{card.description}</p>}
                                />
                            )
                        })
                    }
                </div>
                <BiChevronRight size={48} onClick={() => handleScroll('right')} />
            </div>
        </div>
    );
}

const mockedData = [
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "src/assets/images/godparents-isla.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    }
];