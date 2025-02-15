import { CgChevronLeft } from "react-icons/cg";
import { Card } from "../components/Card/Card";
import styles from './Godparents.module.css'
import { BiChevronRight } from "react-icons/bi";
import { useRef } from "react";

export const Godparents = () => {
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
            <p className={styles.godParentsTitle}>Sobre os Padrinhos</p>
            <div className={styles.slides}>
                <CgChevronLeft size={48} onClick={() => handleScroll('left')} />
                <div className={styles.slidingWindow} ref={slideWindowContainer}>
                    {
                        mockedData.map(card => {
                            return (
                                <Card
                                    //TODO: fix image dimensions
                                    key={card.id}
                                    imageStyles={{
                                        maxHeight: '30vw',
                                        minWidth: '80vw',
                                        maxWidth: '100%',
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
        src: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    },
    {
        id: 100 * Math.random(),
        src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur. Impedit laboriosam reiciendis veniam facere cupiditate dolor. Ex odio, rem esse aspernatur voluptatum officia quibusdam repellendus, est, natus unde iusto!"
    }
];