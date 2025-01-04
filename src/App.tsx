import { Header } from './components/Header/Header'
import { Fiances } from './sections/Fiances'
import { Gifts } from './sections/Gifts'
import { Godparents } from './sections/Godparents'
import { Messages } from './sections/Messages'
import { MessageToFiances } from './sections/MessageToFiances'
import { PresenceConfirmation } from './sections/PresenceConfirmation'

export default function App() {
  return (
    <div>
      <Header />
      <Fiances />
      <Godparents />
      <MessageToFiances />
      <Messages />
      <PresenceConfirmation />
      <Gifts />
    </div>
  )
}
