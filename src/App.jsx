
import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {

  const [ isShowing, setIsShowing ] = useState(false)

  return (
    <div>

        <button onClick={() => setIsShowing(!isShowing)}>Mostrar temporizador</button>

        {isShowing && <Timer setIsShowing={setIsShowing}/>}

    </div>
  )
}

export default App
