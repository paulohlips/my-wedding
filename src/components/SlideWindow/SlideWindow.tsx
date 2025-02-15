import { useRef } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Card } from "../Card/Card";
import styles from './SlideWindow.module.css'
import { useIsMobile } from "../../hooks/useIsMobile"

type SlideWindowGeneric = {
    id: number | string,
    src: string,
    description: string,
    price?: string
}

type SlideWindowGenericProps = {
    data: Array<SlideWindowGeneric>
}


export const SlideWindow = ({ data }: SlideWindowGenericProps) => {
    const isMobile = useIsMobile()
    const slideWindowContainer = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: string) => {
        const scrollAmount = isMobile ? 120 : 300

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
        <div className={styles.container}>
            <div className={styles.slides}>
                <CgChevronLeft size={48} onClick={() => handleScroll('left')} />
                <div className={styles.slidingWindow} ref={slideWindowContainer}>
                    {
                        data.map(card => {
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
                <CgChevronRight size={48} onClick={() => handleScroll('right')} />
            </div>
        </div>
    );
}