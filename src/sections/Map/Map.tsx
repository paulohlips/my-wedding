import { IoLocationOutline } from "react-icons/io5";
import styles from "./Map.module.css"
import waze from "../../assets/images/waze.webp"
import googleMaps from "../../assets/images/google-maps.png"
import { Title } from '.././../components/Title/Title'
import { useIsMobile } from "../../hooks/useIsMobile"

export const Map = () => {
    const address = "-15.674549019018466, -48.09409136933495";
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    const encodedAddress = encodeURIComponent(address);

    const googleMapsLink = `https://www.google.com/maps?q=${encodedAddress}`;
    const wazeLink = `https://waze.com/ul?q=${encodedAddress}`;

    const isMobile = useIsMobile()

    return (
        <div id="Localizacao">
            <div className={styles.map}>
                <Title title="Local do Evento" styles={styles.giftsSectionTitle} />

                <div className={styles.address}>
                    <div className={styles.locationIcon}>
                        <IoLocationOutline size={48} color="#A84424" />
                    </div>
                    <div>
                        <p><strong>Recanto das Flores</strong></p>
                        <p>Núcleo Rural Alexandre Gusmão, 97 - Brazlândia</p>
                        <p>Brasília - DF, 72465-370</p>
                    </div>
                    <div className={styles.link}>
                        <div className={styles.imageContainer}>
                            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                                <p>Abrir no Google Maps</p>
                                <img src={googleMaps} />
                            </a>
                        </div>
                        <div className={styles.imageContainer}>
                            <a href={wazeLink} target="_blank" rel="noopener noreferrer">
                                <p>Abrir no Waze</p>
                                <img src={waze} />
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src={mapUrl}
                    width={isMobile ? "90%" : "800"}
                    height={isMobile ? "100%" : "600"}
                    style={{ border: 0, paddingBottom: '10px' }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};
