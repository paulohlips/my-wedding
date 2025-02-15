import { useIsMobile } from "../../hooks/useIsMobile"

type TitleProps = {
    title: string,
    styles?: string
}

export const Title = ({ title, styles }: TitleProps) => {
    const isMobile = useIsMobile()
    return (
        <p className={styles} style={{ fontSize: isMobile ? '2.8rem' : '4rem' }}>{title}</p>
    )
}