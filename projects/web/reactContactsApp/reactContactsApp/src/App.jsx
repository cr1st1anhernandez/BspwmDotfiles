import './App.css'
import { LoginCard } from './LoginCard'
import { RegistrationCard } from './RegistrationCard'
function App() {
  return (
    <>
      <h1 className='contactsApp-title'> <span className='contactsApp-title-green'>Contacts </span>App</h1>
      <LoginCard />
      {/* <RegistrationCard /> */}
    </>
  )
}
export default App
