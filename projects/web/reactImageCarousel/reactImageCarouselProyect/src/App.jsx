import './App.css'
import { Image } from './Image.jsx';
function App() {
  return (
    <>
      <div className='gallery-card'>
        <h1 className='gallery-card-title'>Gallery of images created with React</h1>
        <Image userName='midudev'/>
      </div>
    </>
  )
}

export default App
