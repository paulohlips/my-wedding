import { ReactNode } from 'react';
import styles from './Card.module.css'

type CardTypeProps = {
    image: string
    children?: ReactNode;
}

export const Card = ({ image, children }: CardTypeProps) => {
    return (
        <div className={styles.card}>
            <img src={image} />
            <div>{children}</div>
        </div>
    )
}