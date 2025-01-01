import styles from './Card.module.css'

type CardTypeProps = {
    image: string
    description: string
}

export const Card = ({ image, description }: CardTypeProps) => {
    return (
        <div className={styles.card}>
            <img src={image} />
            <p>{description}</p>
        </div>
    )
}