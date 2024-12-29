import { useState, useEffect } from "react";
import styles from './CountDown.module.css'

export const CountDown = () => {
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const currentTime = new Date().getTime();
            let remainingTime = 1757786400000 - currentTime;

            if (remainingTime <= 0) {
                remainingTime = 0;
                clearInterval(countdownInterval);
                alert("Countdown complete!");
            }

            setTimeRemaining(remainingTime)
        }, 1000)

        return () => clearInterval(countdownInterval);
    }, [timeRemaining])
    return (
        <div>{timeRemaining && formatTime(timeRemaining)}</div>
    )
}

const formatTime = (time: number) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
        <div className={styles.countdown}>
            <div className={styles.countdownValue}>
                <p>{days.toString().padStart(2, "0")}</p> <span>dias</span>
            </div>
            <div className={styles.countdownValue}>
                <p>{hours.toString().padStart(2, "0")}</p> <span> horas</span>
            </div>
            <div className={styles.countdownValue}>
                <p>{minutes.toString().padStart(2, "0")}</p> <span>minutos</span>
            </div>
            <div className={styles.countdownValue}>
                <p>{seconds.toString().padStart(2, "0")}</p> <span>segundos</span>
            </div>
        </div>
    );
};