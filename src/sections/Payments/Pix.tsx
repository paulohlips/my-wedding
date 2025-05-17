import pixQRcode from "../../assets/images/pix-qrcode.png"
import styles from './payments.module.css';
import { FaPaste } from 'react-icons/fa';


const copyAndPasteCode = "00020126580014BR.GOV.BCB.PIX013651bc0186-7d6d-44c3-a64c-d8651ece291b5204000053039865802BR5925Paulo Henrique Ferreira C6009SAO PAULO62140510rXSCPcGlbx63042C38"
const pixRandomKey = "51bc0186-7d6d-44c3-a64c-d8651ece291b"

const copyToClipBoard = async (content: string, keyType: string) => {
  await navigator.clipboard.writeText(content)
  alert(`${keyType} copiado com sucesso!`)
};


export const Pix = () => {
  return (
    <div className={styles.pixContainer}>
      <p className={styles.title}>Use o QR Code para pagar</p>
      <div>
        <img src={pixQRcode} width={328} height={328} />
      </div>
      <div className={styles.copyQrCode} onClick={() => copyToClipBoard(copyAndPasteCode, 'QR Code')}>
        <p className={styles.copyQrCodeTitle}>Copiar código QR code</p>
        <FaPaste size={28} />
      </div>

      <div className={styles.pixContainerBankData}>
        <p className={styles.title}>Ou use a chave Pix</p>
      </div>
      <div className={styles.backDataContainer}>
        <div className={styles.backData}>
          <p className={styles.backDataKey}>Chave Pix</p>
          <div className={styles.copyRandomKeyText} onClick={() => copyToClipBoard(pixRandomKey, 'Chave PIX')}>
            <p className={styles.backDataValue}> Copiar Chave</p>
            <FaPaste size={24} />
          </div>
        </div>
        <div className={styles.backData}>
          <p className={styles.backDataKey}>Nome</p>
          <p className={styles.backDataValue}>Paulo Henrique F. C. Mendes</p>
        </div>
        <div className={styles.backData}>
          <p className={styles.backDataKey}>CPF</p>
          <p className={styles.backDataValue}>•••.771.491-••</p>
        </div>
        <div className={styles.backData}>
          <p className={styles.backDataKey}>Banco</p>
          <p className={styles.backDataValue}>260 - Nu Pagamentos S.A.</p>
        </div>
      </div>
    </div>
  )
}


