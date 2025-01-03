import { Header } from './components/Header/Header'
import { Fiances } from './sections/Fiances'
import { Godparents } from './sections/Godparents'
import { MessageToFiances } from './sections/MessageToFiances'

export default function App() {
  return (
    <div>
      <Header />
      <Fiances />
      <Godparents />
      <MessageToFiances />
    </div>
  )
}
