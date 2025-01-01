type CardTypeProps = {
    image: string
    description: string
}

export const Card = ({ image, description }: CardTypeProps) => {
    return (
        <div>
            <img src={image} />
            <p>{description}</p>
        </div>
    )
}