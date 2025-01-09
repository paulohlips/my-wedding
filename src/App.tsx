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
      <Gifts />
      <Header />
      <Fiances />
      <Godparents />
      <MessageToFiances />
      <Messages />
      <PresenceConfirmation />
      <DressCode />
      <Map />
    </div>
  )
}
