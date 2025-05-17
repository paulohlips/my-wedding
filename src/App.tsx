import { Header } from './components/Header/Header'
import { DressCode } from './sections/DressCode'
import { Fiances } from './sections/Fiances'
import { Gifts } from './sections/GiftsList/Gifts'
import { Godparents } from './sections/Godparents'
import { Messages } from './sections/Messages/Messages'
import { MessageToFiances } from './sections/Messages/MessageToFiances'
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
        <div><Fiances /></div>
        <div><Godparents /></div>
        <div><MessageToFiances /></div>
        <div><Messages /></div>
        <div><Gifts /></div>

        <div><PresenceConfirmation /></div>
        <div><DressCode /></div>
        <div><Map /></div>
      </div>
    </div>
  )
}
