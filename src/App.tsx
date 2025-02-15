import { Header } from './components/Header/Header'
import { DressCode } from './sections/DressCode'
import { Fiances } from './sections/Fiances'
import { Gifts } from './sections/GiftsList/Gifts'
import { Godparents } from './sections/Godparents'
import { Messages } from './sections/Messages'
import { MessageToFiances } from './sections/MessageToFiances'
import { PresenceConfirmation } from './sections/PresenceConfirmation'
import { Map } from './sections/Map/Map'

export default function App() {
  return (
    <div>
      <Header />
      <div style={{
        backgroundImage: "url(" + "../../../src/assets/images/background.png" + ")",
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
      }}>
        <div style={{ backgroundColor: "rgba(255, 250, 232, 0.8)" }}><Fiances /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 243, 0.8)" }}><Godparents /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 232, 0.8)" }}><MessageToFiances /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 243, 0.8)" }}><Messages /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 232, 0.8)" }}><Gifts /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 243, 0.8)" }}><PresenceConfirmation /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 232, 0.8)" }}><DressCode /></div>
        <div style={{ backgroundColor: "rgba(255, 250, 243, 0.8)" }}><Map /></div>
      </div>
    </div>
  )
}
