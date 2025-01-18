import { ReactNode } from 'react';

type CardTypeProps = {
    image: string
    children?: ReactNode;
    imageStyles?: React.CSSProperties
}

export const Card = ({ image, children, imageStyles }: CardTypeProps) => {
    return (
        <div>
            <img src={image} style={imageStyles} />
            <div>{children}</div>
        </div>
    )
}