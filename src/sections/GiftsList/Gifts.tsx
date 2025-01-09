import styles from './Gifts.module.css'

export const Gifts = () => {
    return (
        <div className={styles.giftsSection}>
            <h1>Presentes aos noivos</h1>
            <h2>Fique à vontade para escolher entre uma das três opções de presente</h2>
            <div className={styles.giftsSectionButtons}>
                <button>Presentes Virtuais</button>
                <button>Presentes em Loja Física</button>
                <button>Cotas de Lua de Mel</button>
            </div>

        </div>
    )
}